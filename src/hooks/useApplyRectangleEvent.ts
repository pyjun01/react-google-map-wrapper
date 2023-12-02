import { RectangleEvent } from 'src/components/Rectangle/type';

import { useMvcObjectEventEffect } from './useMvcObjectEventEffect';

export const useApplyRectangleEvent = (
  rectangle: google.maps.Rectangle | null,
  {
    onBoundsChanged,
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
  }: RectangleEvent,
) => {
  useMvcObjectEventEffect(rectangle, 'bounds_changed', onBoundsChanged);
  useMvcObjectEventEffect(rectangle, 'click', onClick);
  useMvcObjectEventEffect(rectangle, 'contextmenu', onContextmenu);
  useMvcObjectEventEffect(rectangle, 'dblclick', onDblClick);
  useMvcObjectEventEffect(rectangle, 'drag', onDrag);
  useMvcObjectEventEffect(rectangle, 'dragend', onDragEnd);
  useMvcObjectEventEffect(rectangle, 'dragstart', onDragStart);
  useMvcObjectEventEffect(rectangle, 'mousedown', onMouseDown);
  useMvcObjectEventEffect(rectangle, 'mousemove', onMouseMove);
  useMvcObjectEventEffect(rectangle, 'mouseout', onMouseOut);
  useMvcObjectEventEffect(rectangle, 'mouseover', onMouseOver);
  useMvcObjectEventEffect(rectangle, 'mouseup', onMouseUp);
};
