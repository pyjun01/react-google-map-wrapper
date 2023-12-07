import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import {
  AdvancedMarkerContentContextData,
  AdvancedMarkerContentProvider,
} from './Context';
import { AdvancedMarkerProps } from './type';
import { useApplyAdvancedMarkerEvent } from '../../hooks/useApplyAdvancedMarkerEvent';
import { useApplyAdvancedMarkerOptions } from '../../hooks/useApplyAdvancedMarkerOptions';
import { useImportLibrary } from '../../hooks/useImportLibrary';
import { passRef } from '../../utils/passRef';
import { useSetAnchor } from '../InfoWindow/Context';
import { useMapContext } from '../Provider/MapProvider';

export const AdvancedMarker = forwardRef<
  google.maps.marker.AdvancedMarkerElement,
  AdvancedMarkerProps
>(function AdvancedMarker(
  {
    children,
    lat,
    lng,
    collisionBehavior,
    content,
    gmpDraggable,
    title,
    zIndex,
    hidden = false,
    onClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onGmpClick,
  },
  ref,
) {
  const originalMap = useMapContext();
  const map = hidden ? null : originalMap;
  const markerLib = useImportLibrary('marker');
  const setAnchor = useSetAnchor();

  const fragment = useRef<HTMLDivElement>(document.createElement('div'));
  const [advancedMarker, setAdvancedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [pinElement, setPinElement] =
    useState<google.maps.marker.PinElement | null>(null);

  const value = useMemo<AdvancedMarkerContentContextData>(
    () => ({
      setAdvancedMarkerContent: setPinElement,
    }),
    [],
  );

  useEffect(() => {
    if (!markerLib?.AdvancedMarkerElement) {
      return;
    }

    fragment.current.style.display = 'contents';

    const advancedMarker = new markerLib.AdvancedMarkerElement({
      collisionBehavior,
      content: pinElement?.element ?? (children ? fragment.current : content),
      gmpDraggable,
      title,
      zIndex,
      map,
      position: { lat, lng },
    });

    setAdvancedMarker(advancedMarker);
    passRef(ref, advancedMarker);

    // for InfoWindow
    setAnchor(advancedMarker);

    return () => {
      advancedMarker.map = null;
      setAnchor(null);
    };
  }, [markerLib?.AdvancedMarkerElement]);

  useEffect(() => {
    if (advancedMarker) {
      advancedMarker.map = map;
    }
  }, [hidden]);

  useApplyAdvancedMarkerOptions(advancedMarker, {
    lat,
    lng,
    collisionBehavior,
    gmpDraggable,
    title,
    zIndex,
    content: pinElement?.element ?? (children ? fragment.current : content),
  });

  useApplyAdvancedMarkerEvent(advancedMarker, {
    onClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onGmpClick,
  });

  return (
    <AdvancedMarkerContentProvider value={value}>
      {createPortal(children, fragment.current)}
    </AdvancedMarkerContentProvider>
  );
});
