import { forwardRef, useEffect, useState } from 'react';

import { passRef } from '@@utils/passRef';

import { MarkerProps } from './type';
import { useApplyMarkerEvent } from '../../hooks/useApplyMarkerEvent';
import { useSetAnchor } from '../InfoWindow/Context';
import { useMapContext } from '../Provider/MapProvider';

export const Marker = forwardRef<google.maps.Marker, MarkerProps>(
  function Marker(
    {
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
    },
    ref,
  ) {
    const map = useMapContext();
    const setAnchor = useSetAnchor();

    const [marker, setMarker] = useState<google.maps.Marker | null>(null);

    useEffect(() => {
      const marker = new google.maps.Marker({
        ...markerOptions,
        draggable: !!draggable,
        map,
        position: { lat, lng },
      });

      setMarker(marker);
      passRef(ref, marker);

      // for InfoWindow
      setAnchor(marker);

      return () => {
        marker.setMap(null);
        setAnchor(null);
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
  },
);
