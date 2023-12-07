import { forwardRef, useEffect, useState } from 'react';

import { CircleProps } from './type';
import { useApplyCircleEvent } from '../../hooks/useApplyCircleEvent';
import { useApplyCircleOptions } from '../../hooks/useApplyCircleOptions';
import { passRef } from '../../utils/passRef';
import { useMapContext } from '../Provider/MapProvider';

export const Circle = forwardRef<google.maps.Circle, CircleProps>(function Circle(
  {
    center,
    clickable,
    draggable,
    editable,
    fillColor,
    fillOpacity,
    radius,
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

  const [Circle, setCircle] = useState<google.maps.Circle | null>(null);

  useEffect(() => {
    const Circle = new google.maps.Circle({
      map,
      center,
      clickable,
      draggable,
      editable,
      fillColor,
      fillOpacity,
      radius,
      strokeColor,
      strokeOpacity,
      strokePosition,
      strokeWeight,
      visible,
      zIndex,
    });

    setCircle(Circle);
    passRef(ref, Circle);

    return () => {
      Circle.setMap(null);
    };
  }, []);

  useApplyCircleOptions(Circle, {
    center,
    clickable,
    draggable,
    editable,
    fillColor,
    fillOpacity,
    radius,
    strokeColor,
    strokeOpacity,
    strokePosition,
    strokeWeight,
    visible,
    zIndex,
  });
  useApplyCircleEvent(Circle, events);

  return null;
});
