import { forwardRef, useEffect, useMemo, useState } from 'react';

import { passRef } from '@@utils/passRef';

import { AnchorContextData, AnchorProvider } from './Context';
import { InfoWindowProps } from './type';
import { useMapContext } from '../../components/Provider/MapProvider';
import { useApplyInfoWindowEvent } from '../../hooks/useApplyInfoWindowEvent';
import { useImportLibrary } from '../../hooks/useImportLibrary';

export const InfoWindow = forwardRef<google.maps.InfoWindow, InfoWindowProps>(
  function InfoWindow(
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
    ref,
  ) {
    const map = useMapContext();
    const maps = useImportLibrary('maps');

    const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(
      null,
    );

    const [anchor, setAnchor] =
      useState<Parameters<AnchorContextData['setAnchor']>[0]>();

    const value = useMemo<AnchorContextData>(
      () => ({
        setAnchor: (anchor) => setAnchor(anchor),
      }),
      [],
    );

    useEffect(() => {
      if (!maps?.InfoWindow) {
        return;
      }

      const infoWindow = new maps.InfoWindow({
        ariaLabel,
        content,
        disableAutoPan,
        maxWidth,
        minWidth,
        pixelOffset,
        position,
        zIndex,
      });

      setInfoWindow(infoWindow);
      passRef(ref, infoWindow);
    }, [maps?.InfoWindow]);

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
      infoWindow?.setContent(content);
    }, [infoWindow, content]);

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
    }, [
      infoWindow,
      ariaLabel,
      disableAutoPan,
      maxWidth,
      minWidth,
      pixelOffset,
      zIndex,
    ]);

    useApplyInfoWindowEvent(infoWindow, {
      onCloseClick,
      onContentChanged,
      onDomReady,
      onPositionChanged,
      onVisible,
      onZIndexChanged,
    });

    return <AnchorProvider value={value}>{children}</AnchorProvider>;
  },
);
