import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { AnchorContextData, AnchorProvider } from './Context';
import { InfoWindowProps } from './type';
import { useMapContext } from '../../components/Provider/MapProvider';
import { useApplyInfoWindowEvent } from '../../hooks/useApplyInfoWindowEvent';
import { useImportLibrary } from '../../hooks/useImportLibrary';
import { passRef } from '../../utils/passRef';
import { createPortal } from 'react-dom';

export const InfoWindow = forwardRef<google.maps.InfoWindow, InfoWindowProps>(function InfoWindow(
  {
    children,
    open,
    shouldFocus,
    ariaLabel,
    content,
    disableAutoPan,
    maxWidth,
    minWidth,
    pixelOffset,
    position,
    zIndex,
    onCloseClick,
    onContentChanged,
    onDomReady,
    onPositionChanged,
    onVisible,
    onZIndexChanged,
  },
  ref
) {
  const map = useMapContext();
  const mapsLib = useImportLibrary('maps');

  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const fragment = useRef<HTMLDivElement>(document.createElement('div'));
  const [anchor, setAnchor] = useState<Parameters<AnchorContextData['setAnchor']>[0]>();

  const value = useMemo<AnchorContextData>(
    () => ({
      setAnchor: (anchor) => setAnchor(anchor),
    }),
    []
  );

  useEffect(() => {
    if (!mapsLib?.InfoWindow) {
      return;
    }

    const infoWindow = new mapsLib.InfoWindow({
      ariaLabel,
      content: fragment.current,
      disableAutoPan,
      maxWidth,
      minWidth,
      pixelOffset,
      position,
      zIndex,
    });

    setInfoWindow(infoWindow);
    passRef(ref, infoWindow);
  }, [mapsLib?.InfoWindow]);

  useEffect(() => {
    if (!infoWindow) {
      return;
    }

    if (open) {
      infoWindow.open({
        anchor,
        map,
        shouldFocus,
      });
    } else {
      infoWindow.close();
    }
  }, [infoWindow, anchor, open]);

  useEffect(() => {
    infoWindow?.setPosition(position);
  }, [infoWindow, position?.lat, position?.lng]);

  useEffect(() => {
    infoWindow?.setOptions({
      ariaLabel,
      disableAutoPan,
      maxWidth,
      minWidth,
      pixelOffset,
      zIndex,
    });
  }, [infoWindow, ariaLabel, disableAutoPan, maxWidth, minWidth, pixelOffset, zIndex]);

  useApplyInfoWindowEvent(infoWindow, {
    onCloseClick,
    onContentChanged,
    onDomReady,
    onPositionChanged,
    onVisible,
    onZIndexChanged,
  });

  return <AnchorProvider value={value}>
    {createPortal(<>{content}</>, fragment.current)}
    {children}
  </AnchorProvider>;
});
