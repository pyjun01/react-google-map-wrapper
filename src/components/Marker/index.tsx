import { forwardRef, useEffect, useRef, useState } from 'react';

import { MarkerProps } from './type';
import { useApplyMarkerEvent } from '../../hooks/useApplyMarkerEvent';
import { useImportLibrary } from '../../hooks/useImportLibrary';
import { passRef } from '../../utils/passRef';
import { useSetAnchor } from '../InfoWindow/Context';
import { useMapContext } from '../Provider/MapProvider';
import { useMarkerClusterer } from '../MarkerClusterer/Context';

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
      ...options
    },
    ref,
  ) {
    const map = useMapContext();
    const markerLib = useImportLibrary('marker');
    const setAnchor = useSetAnchor();
    const cluster = useMarkerClusterer();
    const isFirstMount = useRef(true);

    const [marker, setMarker] = useState<google.maps.Marker | null>(null);

    useEffect(() => {
      if (!markerLib?.Marker) {
        return;
      }

      const marker = new markerLib.Marker({
        ...options,
        draggable: !!draggable,
        map,
        position: { lat, lng },
      });

      setMarker(marker);
      passRef(ref, marker);

      // for InfoWindow
      setAnchor(marker);
      // for MarkerClusterer
      cluster?.addMarker(marker);

      return () => {
        marker?.setMap(null);
        setAnchor(null);
        cluster?.removeMarker(marker);
      };
    }, [markerLib?.Marker]);

    useEffect(() => {
      marker?.setMap(cluster ? null : map);
    }, [cluster]);

    useEffect(() => {
      marker?.setPosition({ lat, lng });
    }, [lat, lng]);

    useEffect(() => {
      marker?.setDraggable(!!draggable);
    }, [draggable]);

    useEffect(() => {
      marker?.setOptions(options);
    }, Object.values(options));

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
