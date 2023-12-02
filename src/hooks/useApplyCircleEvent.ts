import { CircleEvent } from 'src/components/Circle/type';

import { useMvcObjectEventEffect } from './useMvcObjectEventEffect';

export const useApplyCircleEvent = (
  circle: google.maps.Circle | null,
  {
    onCenterChanged,
    onClick,
    onDblClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onMouseDown,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onRadiusChanged,
  }: CircleEvent,
) => {
  useMvcObjectEventEffect(circle, 'center_changed', onCenterChanged);
  useMvcObjectEventEffect(circle, 'click', onClick);
  useMvcObjectEventEffect(circle, 'dblclick', onDblClick);
  useMvcObjectEventEffect(circle, 'drag', onDrag);
  useMvcObjectEventEffect(circle, 'dragend', onDragEnd);
  useMvcObjectEventEffect(circle, 'dragstart', onDragStart);
  useMvcObjectEventEffect(circle, 'mousedown', onMouseDown);
  useMvcObjectEventEffect(circle, 'mousemove', onMouseMove);
  useMvcObjectEventEffect(circle, 'mouseout', onMouseOut);
  useMvcObjectEventEffect(circle, 'mouseover', onMouseOver);
  useMvcObjectEventEffect(circle, 'mouseup', onMouseUp);
  useMvcObjectEventEffect(circle, 'radius_changed', onRadiusChanged);
};
