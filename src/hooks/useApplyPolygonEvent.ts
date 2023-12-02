import { PolygonEvent } from 'src/components/Polygon/type';

import { useMvcObjectEventEffect } from './useMvcObjectEventEffect';

export const useApplyPolygonEvent = (
  polygon: google.maps.Polygon | null,
  {
    onClick,
    onContextmenu,
    onDblClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onMouseDown,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
  }: PolygonEvent,
) => {
  useMvcObjectEventEffect(polygon, 'click', onClick);
  useMvcObjectEventEffect(polygon, 'contextmenu', onContextmenu);
  useMvcObjectEventEffect(polygon, 'dblclick', onDblClick);
  useMvcObjectEventEffect(polygon, 'drag', onDrag);
  useMvcObjectEventEffect(polygon, 'dragend', onDragEnd);
  useMvcObjectEventEffect(polygon, 'dragstart', onDragStart);
  useMvcObjectEventEffect(polygon, 'mousedown', onMouseDown);
  useMvcObjectEventEffect(polygon, 'mousemove', onMouseMove);
  useMvcObjectEventEffect(polygon, 'mouseout', onMouseOut);
  useMvcObjectEventEffect(polygon, 'mouseover', onMouseOver);
  useMvcObjectEventEffect(polygon, 'mouseup', onMouseUp);
};
