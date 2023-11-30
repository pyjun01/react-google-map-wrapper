import { forwardRef, useEffect, useState } from 'react';

import { PolylineProps } from './type';
import { useApplyPolylineEvent } from '../../hooks/useApplyPolylineEvent';
import { useApplyPolylineOptions } from '../../hooks/useApplyPolylineOptions';
import { passRef } from '../../utils/passRef';
import { useMapContext } from '../Provider/MapProvider';

export const Polyline = forwardRef<google.maps.Polyline, PolylineProps>(
  function Polyline(
    {
      clickable,
      draggable,
      editable,
      geodesic,
      icons,
      path,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      visible,
      zIndex,
      ...events
    },
    ref,
  ) {
    const map = useMapContext();

    const [polyline, setPolyline] = useState<google.maps.Polyline | null>(null);

    useEffect(() => {
      const polyline = new google.maps.Polyline({
        map,
        clickable,
        draggable,
        editable,
        geodesic,
        icons,
        path,
        strokeColor,
        strokeOpacity,
        strokeWeight,
        visible,
        zIndex,
      });

      setPolyline(polyline);
      passRef(ref, polyline);

      return () => {
        polyline.setMap(null);
      };
    }, []);

    useApplyPolylineOptions(polyline, {
      clickable,
      draggable,
      editable,
      geodesic,
      icons,
      path,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      visible,
      zIndex,
    });
    useApplyPolylineEvent(polyline, events);

    return null;
  },
);
