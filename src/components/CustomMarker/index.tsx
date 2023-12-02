import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { CustomMarkerProps, OverlayMarker } from './type';
import { passRef } from '../../utils/passRef';
import { CustomMarkerProvider } from '../Provider/CustomMarkerProvider';
import { useMapContext } from '../Provider/MapProvider';

let classCache;

export const CustomMarker = forwardRef<OverlayMarker, CustomMarkerProps>(
  function CustomMarker(
    {
      children,
      lat,
      lng,
      draggable,
      skipDragOnClickable = true,
      onDragStart,
      onDrag,
      onDragEnd,
    },
    ref,
  ) {
    const [OverlayMarker] = useState(
      () =>
        classCache ||
        (classCache = class OverlayMarkerImpl
          extends google.maps.OverlayView
          implements OverlayMarker
        {
          map: google.maps.Map;
          container: HTMLDivElement;
          position: google.maps.LatLngLiteral;
          draggable: boolean;
          mounseDownHandler;
          mouseMoveHandler;
          mouseUpHandler;
          mouseLeaveHandler;
          eventMap = new Map<
            String,
            (position: google.maps.LatLngLiteral) => void
          >();

          constructor({
            map,
            content,
            position,
            draggable,
          }: {
            map: google.maps.Map;
            content: Node;
            position: google.maps.LatLng | google.maps.LatLngLiteral;
            draggable: unknown;
          }) {
            super();

            this.position =
              position instanceof google.maps.LatLng
                ? position.toJSON()
                : position;
            this.container = content as HTMLDivElement;
            this.map = map;
            this.draggable = !!draggable;

            this.setMap(map);
          }

          onAdd() {
            this.setDraggable(this.draggable);

            this.container.style.position = 'absolute';
            // this.container.appendChild(this.content);
            this.getPanes()?.overlayMouseTarget.appendChild(this.container);
          }

          onRemove() {
            window.removeEventListener('mousemove', this.mouseMoveHandler);
            window.removeEventListener('mouseup', this.mouseUpHandler);
            this.container.parentNode?.removeChild(this.container);
          }

          draw() {
            const position = this.getProjection().fromLatLngToDivPixel(
              this.position,
            );

            if (position) {
              Object.assign(this.container!.style, {
                left: `${position.x}px`,
                top: `${position.y}px`,
              });
            }
          }

          setDraggable(draggable: boolean) {
            this.container.draggable = this.draggable = draggable;

            this.removeEvent();
            draggable && this.addeEvent();
          }

          private addeEvent() {
            const mapDiv = this.map.getDiv();
            let isDown = false;

            const getCurrentCoordinate = (e: MouseEvent) => {
              const origin = this.get('origin'),
                left = origin.clientX - e.clientX,
                top = origin.clientY - e.clientY,
                pos = this.getProjection().fromLatLngToDivPixel(this.position)!;

              return this.getProjection().fromDivPixelToLatLng(
                new google.maps.Point(pos.x - left, pos.y - top),
              )!;
            };

            this.container.addEventListener(
              'mousedown',
              (this.mounseDownHandler = (e) => {
                if (
                  skipDragOnClickable &&
                  ['A', 'BUTTON'].includes((e.target as HTMLElement).tagName)
                ) {
                  return;
                }

                isDown = true;
                this.map.set('draggable', false);

                this.container.style.cursor = 'move';

                this.set('origin', e);

                window.addEventListener(
                  'mousemove',
                  (this.mouseMoveHandler = (e) => {
                    const latLng = getCurrentCoordinate(e);
                    this.set('position', latLng);
                    this.set('origin', e);
                    this.draw();

                    this.eventMap.get('mousemove')?.(latLng.toJSON());
                  }),
                );

                this.eventMap.get('mousedown')?.(this.position);
              }),
            );
            window.addEventListener(
              'mouseup',
              (this.mouseUpHandler = (e) => {
                if (isDown) {
                  isDown = false;
                  this.map.set('draggable', true);

                  if (this.mouseMoveHandler) {
                    window.removeEventListener(
                      'mousemove',
                      this.mouseMoveHandler,
                    );
                    this.container.style.cursor = 'default';

                    this.eventMap.get('mouseup')?.(
                      getCurrentCoordinate(e).toJSON(),
                    );
                  }
                }
              }),
            );

            mapDiv.addEventListener(
              'mouseleave',
              (this.mouseLeaveHandler = () => {
                google.maps.event.trigger(this.container, 'mouseup');
              }),
            );
          }

          removeEvent() {
            this.mounseDownHandler &&
              this.container.removeEventListener(
                'mousedown',
                this.mounseDownHandler,
              );
            this.mouseMoveHandler &&
              window.removeEventListener('mousemove', this.mouseMoveHandler);
            this.mouseUpHandler &&
              window.removeEventListener('mouseup', this.mouseUpHandler);
            this.mouseLeaveHandler &&
              this.map
                .getDiv()
                .removeEventListener('mouseleave', this.mouseLeaveHandler);
          }

          addDragEventListener(
            key: string,
            fn: (position: google.maps.LatLngLiteral) => void,
          ) {
            this.eventMap.set(key, fn);

            return () => this.eventMap.delete(key);
          }

          updatePosition(position: google.maps.LatLngLiteral) {
            this.position = position;
            this.draw();
          }
        }),
    );

    const map = useMapContext();
    const fragment = useRef<HTMLDivElement>(document.createElement('div'));
    const [marker, setMarker] = useState<OverlayMarker | null>(null);

    useEffect(() => {
      const marker = new OverlayMarker({
        map,
        content: fragment.current,
        position: { lat, lng },
        draggable,
      });

      setMarker(marker);
      passRef(ref, marker);

      return () => {
        marker.setMap(null);
      };
    }, []);

    useEffect(() => {
      marker?.updatePosition({ lat, lng });
    }, [lat, lng]);

    useEffect(() => {
      if (draggable && marker) {
        const cleanUpList = [
          onDragStart && marker.addDragEventListener('mousedown', onDragStart),
          onDrag && marker.addDragEventListener('mousemove', onDrag),
          onDragEnd && marker.addDragEventListener('mouseup', onDragEnd),
        ];

        return () => cleanUpList.filter(Boolean).forEach((fn) => fn!());
      }
    }, [marker, onDragStart, onDrag, onDragEnd]);

    useEffect(() => {
      if (marker && marker.draggable !== !!draggable) {
        marker.setDraggable(!!draggable);
      }
    }, [marker, draggable]);

    return createPortal(
      marker && (
        <CustomMarkerProvider value={marker}>{children}</CustomMarkerProvider>
      ),
      fragment.current,
    );
  },
);
