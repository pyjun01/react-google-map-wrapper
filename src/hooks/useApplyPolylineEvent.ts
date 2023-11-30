import { PolylineEvent } from 'src/components/Polyline/type';

import { useMvcObjectEventEffect } from './useMvcObjectEventEffect';

export const useApplyPolylineEvent = (
  polyline: google.maps.Polyline | null,
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
  }: PolylineEvent,
) => {
  useMvcObjectEventEffect(polyline, 'click', onClick);
  useMvcObjectEventEffect(polyline, 'contextmenu', onContextmenu);
  useMvcObjectEventEffect(polyline, 'dblclick', onDblClick);
  useMvcObjectEventEffect(polyline, 'drag', onDrag);
  useMvcObjectEventEffect(polyline, 'dragend', onDragEnd);
  useMvcObjectEventEffect(polyline, 'dragstart', onDragStart);
  useMvcObjectEventEffect(polyline, 'mousedown', onMouseDown);
  useMvcObjectEventEffect(polyline, 'mousemove', onMouseMove);
  useMvcObjectEventEffect(polyline, 'mouseout', onMouseOut);
  useMvcObjectEventEffect(polyline, 'mouseover', onMouseOver);
  useMvcObjectEventEffect(polyline, 'mouseup', onMouseUp);
};
