import { useRef } from "react";
import { EventType, OverlayMarker } from "./type";

let classCache;

export const useOverlayMarker = () => {
  if (classCache) {
    return classCache;
  }

  classCache = class OverlayMarkerImpl extends google.maps.OverlayView implements OverlayMarker {
    map: google.maps.Map;
    container: HTMLDivElement;
    position: google.maps.LatLngLiteral;
    draggable: boolean;
    preventDragOnClickable: boolean;
    eventMap = new Map<EventType, (position: google.maps.LatLngLiteral) => void>();
    mounseDownHandler?: (e: MouseEvent) => void;
    mouseMoveHandler?: (e: MouseEvent) => void;
    mouseUpHandler?: (e: MouseEvent) => void;
    mouseLeaveHandler?: (e: MouseEvent) => void;
    touchStartHandler?: (e: TouchEvent) => void;
    touchMoveHandler?: (e: TouchEvent) => void;
    touchEndHandler?: (e: TouchEvent) => void;
    touchCancelHandler?: (e: TouchEvent) => void;

    constructor({
      map,
      content,
      position,
      draggable,
      preventDragOnClickable,
    }: {
      map: google.maps.Map;
      content: Node;
      position: google.maps.LatLng | google.maps.LatLngLiteral;
      draggable: boolean;
      preventDragOnClickable: boolean;
    }) {
      super();

      this.position = position instanceof google.maps.LatLng ? position.toJSON() : position;
      this.container = content as HTMLDivElement;
      this.map = map;
      this.draggable = !!draggable;
      this.preventDragOnClickable = !!preventDragOnClickable;

      this.setMap(map);
    }

    onAdd() {
      this.setDraggable(this.draggable);

      this.container.style.position = 'absolute';
      // this.container.appendChild(this.content);
      this.getPanes()?.overlayMouseTarget.appendChild(this.container);
    }

    onRemove() {
      this.mouseMoveHandler && window.removeEventListener('mousemove', this.mouseMoveHandler);
      this.mouseUpHandler && window.removeEventListener('mouseup', this.mouseUpHandler);
      this.container.parentNode?.removeChild(this.container);
    }

    draw() {
      const position = this.getProjection().fromLatLngToDivPixel(this.position);

      if (position) {
        Object.assign(this.container!.style, {
          left: `${position.x}px`,
          top: `${position.y}px`,
        });
      }
    }

    setDraggable(draggable: boolean) {
      this.container.draggable = this.draggable = draggable;
      this.container.style['touch-action'] = this.draggable ? 'none' : 'auto';

      this.removeEvent();
      draggable && this.addEvent();
    }

    setPreventDragOnClickable(preventDragOnClickable: boolean) {
      this.preventDragOnClickable = preventDragOnClickable;
    }

    getCurrentCoordinate(e: MouseEvent | Touch) {
      const origin = this.get('origin');
      const left = origin.clientX - e.clientX;
      const top = origin.clientY - e.clientY;
      const pos = this.getProjection().fromLatLngToDivPixel(this.position)!;

      return this.getProjection().fromDivPixelToLatLng(new google.maps.Point(pos.x - left, pos.y - top))?.toJSON()!;
    };

    private addEvent() {
      const mapDiv = this.map.getDiv();
      let isDown = false;

      // mouse event
      this.container.addEventListener(
        'mousedown',
        (this.mounseDownHandler = (e: MouseEvent) => {
          if (this.preventDragOnClickable && ['A', 'BUTTON'].includes((e.target as HTMLElement).tagName)) {
            return;
          }

          isDown = true;
          this.map.set('draggable', false);

          this.container.style.cursor = 'move';

          this.set('origin', e);

          window.addEventListener(
            'mousemove',
            (this.mouseMoveHandler = (e: MouseEvent) => {
              const latLng = this.getCurrentCoordinate(e);
              this.set('position', latLng);
              this.set('origin', e);
              this.draw();

              this.eventMap.get('drag')?.(latLng);
            })
          );

          this.eventMap.get('dragstart')?.(this.position);
        })
      );
      window.addEventListener(
        'mouseup',
        (this.mouseUpHandler = (e: MouseEvent) => {
          if (isDown) {
            isDown = false;
            this.map.set('draggable', true);

            if (this.mouseMoveHandler) {
              window.removeEventListener('mousemove', this.mouseMoveHandler);
              this.container.style.cursor = 'default';

              this.eventMap.get('dragend')?.(this.getCurrentCoordinate(e));
            }
          }
        })
      );
      mapDiv.addEventListener(
        'mouseleave',
        (this.mouseLeaveHandler = () => {
          google.maps.event.trigger(this.container, 'mouseup');
        })
      );

      // touch event
      this.container.addEventListener(
        'touchstart',
        (this.touchStartHandler = (e: TouchEvent) => {
          if (this.preventDragOnClickable && ['A', 'BUTTON'].includes((e.target as HTMLElement).tagName)) {
            return;
          }

          isDown = true;
          this.map.set('draggable', false);

          this.container.style.cursor = 'move';

          const touch = e.touches[0];
          this.set('origin', touch);

          window.addEventListener(
            'touchmove',
            (this.touchMoveHandler = (e: TouchEvent) => {
              const touch = e.touches[0];

              if (!touch) {
                return;
              }

              const latLng = this.getCurrentCoordinate(touch);
              this.set('position', latLng);
              this.set('origin', touch);
              this.draw();

              this.eventMap.get('drag')?.(latLng);
            })
          );

          this.eventMap.get('dragstart')?.(this.position);
        })
      );
      window.addEventListener(
        'touchend',
        (this.touchEndHandler = (e: TouchEvent) => {
          if (isDown) {
            if (e.cancelable) {
              e.preventDefault();
            }

            isDown = false;
            this.map.set('draggable', true);

            if (this.touchMoveHandler) {
              window.removeEventListener('touchmove', this.touchMoveHandler);
              this.container.style.cursor = 'default';

              const touch = e.touches[0];

              if (touch) {
                this.eventMap.get('dragend')?.(this.getCurrentCoordinate(touch));
              }
            }
          }
        })
      );
      mapDiv.addEventListener(
        'touchcancel',
        (this.touchCancelHandler = () => {
          google.maps.event.trigger(this.container, 'touchend');
        })
      );
    }

    removeEvent() {
      this.mounseDownHandler && this.container.removeEventListener('mousedown', this.mounseDownHandler);
      this.mouseMoveHandler && window.removeEventListener('mousemove', this.mouseMoveHandler);
      this.mouseUpHandler && window.removeEventListener('mouseup', this.mouseUpHandler);
      this.mouseLeaveHandler && this.map.getDiv().removeEventListener('mouseleave', this.mouseLeaveHandler);
      this.touchStartHandler && this.container.removeEventListener('touchstart', this.touchStartHandler);
      this.touchMoveHandler && window.removeEventListener('touchmove', this.touchMoveHandler);
      this.touchEndHandler && window.removeEventListener('touchend', this.touchEndHandler);
      this.touchCancelHandler && this.map.getDiv().removeEventListener('touchcancel', this.touchCancelHandler);
    }

    addDragEventListener(key: EventType, fn: (position: google.maps.LatLngLiteral) => void) {
      this.eventMap.set(key, fn);

      return () => this.eventMap.delete(key);
    }

    updatePosition(position: google.maps.LatLngLiteral) {
      this.position = position;
      this.draw();
    }
  }

  return classCache;
}
