import { useEffect, useState } from 'react';

import { MarkerProps } from './type';
import { useApplyMarkerEvent } from '../../hooks/useApplyMarkerEvent';
import { useMapContext } from '../Provider/MapProvider';

export function Marker({
  lat,
  lng,
  draggable,
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
  ...markerOptions
}: MarkerProps) {
  const map = useMapContext();
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  useEffect(() => {
    const marker = new google.maps.Marker({
      ...markerOptions,
      draggable: !!draggable,
      map,
      position: { lat, lng },
    });

    setMarker(marker);

    return () => {
      marker.setMap(null);
    };
  }, []);

  useEffect(() => {
    marker?.setPosition({ lat, lng });
  }, [lat, lng]);

  useEffect(() => {
    marker?.setDraggable(!!draggable);
  }, [draggable]);

  useEffect(() => {
    marker?.setOptions(markerOptions);
  }, [markerOptions]);

  useApplyMarkerEvent(marker, {
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
  });

  return null;
}
