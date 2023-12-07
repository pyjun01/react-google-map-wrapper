import { forwardRef, useEffect, useState } from 'react';

import { PolygonProps } from './type';
import { useApplyPolygonEvent } from '../../hooks/useApplyPolygonEvent';
import { useApplyPolygonOptions } from '../../hooks/useApplyPolygonOptions';
import { passRef } from '../../utils/passRef';
import { useMapContext } from '../Provider/MapProvider';

export const Polygon = forwardRef<google.maps.Polygon, PolygonProps>(function Polygon(
  {
    clickable,
    draggable,
    editable,
    fillColor,
    fillOpacity,
    geodesic,
    paths,
    strokeColor,
    strokeOpacity,
    strokePosition,
    strokeWeight,
    visible,
    zIndex,
    ...events
  },
  ref
) {
  const map = useMapContext();

  const [Polygon, setPolygon] = useState<google.maps.Polygon | null>(null);

  useEffect(() => {
    const Polygon = new google.maps.Polygon({
      map,
      clickable,
      draggable,
      editable,
      fillColor,
      fillOpacity,
      geodesic,
      paths,
      strokeColor,
      strokeOpacity,
      strokePosition,
      strokeWeight,
      visible,
      zIndex,
    });

    setPolygon(Polygon);
    passRef(ref, Polygon);

    return () => {
      Polygon.setMap(null);
    };
  }, []);

  useApplyPolygonOptions(Polygon, {
    clickable,
    draggable,
    editable,
    fillColor,
    fillOpacity,
    geodesic,
    paths,
    strokeColor,
    strokeOpacity,
    strokePosition,
    strokeWeight,
    visible,
    zIndex,
  });
  useApplyPolygonEvent(Polygon, events);

  return null;
});
