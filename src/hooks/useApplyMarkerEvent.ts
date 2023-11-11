import { useEffect } from 'react';
import { MarkerEvent } from 'src/components/Marker/type';

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
  const useEventEffect = (key, callback) =>
    useEffect(() => {
      if (!marker || !callback) {
        return;
      }

      const listener = marker.addListener(key, callback);

      return () => google.maps.event.removeListener(listener);
    }, []);

  useEventEffect('animation_changed', onAnimationChanged);
  useEventEffect('click', onClick);
  useEventEffect('clickable_changed', onClickableChanged);
  useEventEffect('contextmenu', onContextMenu);
  useEventEffect('cursor_changed', onCursorChanged);
  useEventEffect('dblclick', onDblClick);
  useEventEffect('drag', onDrag);
  useEventEffect('dragend', onDragEnd);
  useEventEffect('draggable_changed', onDraggableChanged);
  useEventEffect('dragstart', onDragStart);
  useEventEffect('flat_changed', onFlatChanged);
  useEventEffect('icon_changed', onIconChanged);
  useEventEffect('mousedown', onMouseDown);
  useEventEffect('mouseout', onMouseOut);
  useEventEffect('mouseover', onMouseOver);
  useEventEffect('mouseup', onMouseUp);
  useEventEffect('position_changed', onPositionChanged);
  useEventEffect('shape_changed', onShapeChanged);
  useEventEffect('title_changed', onTitleChanged);
  useEventEffect('visible_changed', onVisibleChanged);
  useEventEffect('zindex_changed', onZindexChanged);
};
