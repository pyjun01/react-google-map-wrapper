import { forwardRef, useEffect, useState } from 'react';

import { RectangleProps } from './type';
import { useApplyRectangleEvent } from '../../hooks/useApplyRectangleEvent';
import { useApplyRectangleOptions } from '../../hooks/useApplyRectangleOptions';
import { passRef } from '../../utils/passRef';
import { useMapContext } from '../Provider/MapProvider';

export const Rectangle = forwardRef<google.maps.Rectangle, RectangleProps>(function Rectangle(
  {
    bounds,
    clickable,
    draggable,
    editable,
    fillColor,
    fillOpacity,
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

  const [Rectangle, setRectangle] = useState<google.maps.Rectangle | null>(null);

  useEffect(() => {
    const Rectangle = new google.maps.Rectangle({
      map,
      bounds,
      clickable,
      draggable,
      editable,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokePosition,
      strokeWeight,
      visible,
      zIndex,
    });

    setRectangle(Rectangle);
    passRef(ref, Rectangle);

    return () => {
      Rectangle.setMap(null);
    };
  }, []);

  useApplyRectangleOptions(Rectangle, {
    bounds,
    clickable,
    draggable,
    editable,
    fillColor,
    fillOpacity,
    strokeColor,
    strokeOpacity,
    strokePosition,
    strokeWeight,
    visible,
    zIndex,
  });
  useApplyRectangleEvent(Rectangle, events);

  return null;
});
