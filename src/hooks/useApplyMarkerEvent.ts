import { useMvcObjectEventEffect } from './useMvcObjectEventEffect';
import { MarkerEvent } from '../components/Marker/type';

export const useApplyMarkerEvent = (
  marker: google.maps.Marker | null,
  {
    onAnimationChanged,
    onClick,
    onClickableChanged,
    onContextMenu,
    onCursorChanged,
    onDblClick,
    onDrag,
    onDragEnd,
    onDraggableChanged,
    onDragStart,
    onFlatChanged,
    onIconChanged,
    onMouseDown,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onPositionChanged,
    onShapeChanged,
    onTitleChanged,
    onVisibleChanged,
    onZindexChanged,
  }: MarkerEvent,
) => {
  useMvcObjectEventEffect(marker, 'animation_changed', onAnimationChanged);
  useMvcObjectEventEffect(marker, 'click', onClick);
  useMvcObjectEventEffect(marker, 'clickable_changed', onClickableChanged);
  useMvcObjectEventEffect(marker, 'contextmenu', onContextMenu);
  useMvcObjectEventEffect(marker, 'cursor_changed', onCursorChanged);
  useMvcObjectEventEffect(marker, 'dblclick', onDblClick);
  useMvcObjectEventEffect(marker, 'drag', onDrag);
  useMvcObjectEventEffect(marker, 'dragend', onDragEnd);
  useMvcObjectEventEffect(marker, 'draggable_changed', onDraggableChanged);
  useMvcObjectEventEffect(marker, 'dragstart', onDragStart);
  useMvcObjectEventEffect(marker, 'flat_changed', onFlatChanged);
  useMvcObjectEventEffect(marker, 'icon_changed', onIconChanged);
  useMvcObjectEventEffect(marker, 'mousedown', onMouseDown);
  useMvcObjectEventEffect(marker, 'mouseout', onMouseOut);
  useMvcObjectEventEffect(marker, 'mouseover', onMouseOver);
  useMvcObjectEventEffect(marker, 'mouseup', onMouseUp);
  useMvcObjectEventEffect(marker, 'position_changed', onPositionChanged);
  useMvcObjectEventEffect(marker, 'shape_changed', onShapeChanged);
  useMvcObjectEventEffect(marker, 'title_changed', onTitleChanged);
  useMvcObjectEventEffect(marker, 'visible_changed', onVisibleChanged);
  useMvcObjectEventEffect(marker, 'zindex_changed', onZindexChanged);
};
