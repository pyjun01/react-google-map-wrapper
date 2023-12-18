import { forwardRef, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { CustomMarkerProps, OverlayMarker } from './type';
import { passRef } from '../../utils/passRef';
import { useMapContext } from '../Provider/MapProvider';
import { useOverlayMarker } from './hooks';
import { useEvent } from '../../hooks/useEvent';

export const CustomMarker = forwardRef<OverlayMarker, CustomMarkerProps>(function CustomMarker(
  { children, lat, lng, draggable, preventDragOnClickable = true, onDragStart = null, onDrag = null, onDragEnd = null },
  ref
) {
  const OverlayMarker = useOverlayMarker();

  const map = useMapContext();
  const fragment = useRef<HTMLDivElement>(document.createElement('div'));
  const [marker, setMarker] = useState<OverlayMarker | null>(null);

  const onCachedDragStart = useEvent(onDragStart);
  const onCachedDrag = useEvent(onDrag);
  const onCachedDragEnd = useEvent(onDragEnd);

  useEffect(() => {
    const marker = new OverlayMarker({
      map,
      content: fragment.current,
      position: { lat, lng },
      draggable,
      preventDragOnClickable,
    });

    setMarker(marker);
    passRef(ref, marker);

    return () => {
      marker.setMap(null);
    };
  }, []);

  useEffect(() => {
    marker?.updatePosition({ lat, lng });
  }, [lat, lng]);

  useEffect(() => {
    if (marker && marker.draggable !== !!draggable) {
      marker.setDraggable(!!draggable);
    }

    if (marker && draggable) {
      const cleanUpList = [
        onCachedDragStart && marker.addDragEventListener('dragstart', onCachedDragStart),
        onCachedDrag && marker.addDragEventListener('drag', onCachedDrag),
        onCachedDragEnd && marker.addDragEventListener('dragend', onCachedDragEnd),
      ];

      return () => cleanUpList.filter(Boolean).forEach((fn) => fn!());
    }
  }, [marker, draggable]);

  useEffect(() => {
    marker?.setPreventDragOnClickable(preventDragOnClickable);
  }, [preventDragOnClickable]);

  return createPortal(<>{children}</>, fragment.current);
});
