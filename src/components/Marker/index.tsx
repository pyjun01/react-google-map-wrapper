import { forwardRef, useEffect, useState } from 'react';

import { importLibrary } from 'src/hooks/useImportLibrary';

import { MarkerProps } from './type';
import { useApplyMarkerEvent } from '../../hooks/useApplyMarkerEvent';
import { passRef } from '../../utils/passRef';
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
      let marker;

      const loadMarker = async () => {
        const markerLib = await importLibrary('marker');

        marker = new markerLib.Marker({
          ...markerOptions,
          draggable: !!draggable,
          map,
          position: { lat, lng },
        });

        setMarker(marker);
        passRef(ref, marker);

        // for InfoWindow
        setAnchor(marker);
      };
      loadMarker();

      return () => {
        marker?.setMap(null);
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
