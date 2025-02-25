import { forwardRef, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { PinElementProps } from './type';
import { useApplyPinElementOptions } from '../../hooks/useApplyPinElementOptions';
import { useImportLibrary } from '../../hooks/useImportLibrary';
import { passRef } from '../../utils/passRef';
import { useAdvancedMarkerContent } from '../AdvancedMarker/Context';

const PinElementImpl = forwardRef<google.maps.marker.PinElement, PinElementProps & { lib: google.maps.MarkerLibrary }>(function PinElementImpl(
  { children, lib, background, borderColor, glyph, glyphColor, scale },
  ref
) {
  const { setAdvancedMarkerContent } = useAdvancedMarkerContent();

  const fragment = useRef<HTMLDivElement>(document.createElement('div'));
  const [pinElement, setPinElement] = useState<google.maps.marker.PinElement | null>(null);

  useEffect(() => {
    fragment.current.style.display = 'contents';
    const pinElement = new lib.PinElement({
      background,
      borderColor,
      glyph: fragment.current.childNodes.length ? fragment.current : glyph,
      glyphColor,
      scale,
    });

    setPinElement(pinElement);
    passRef(ref, pinElement);

    // for InfoWindow
    setAdvancedMarkerContent(pinElement);

    return () => {
      setAdvancedMarkerContent(null);
    };
  }, []);

  useApplyPinElementOptions(pinElement, {
    background,
    borderColor,
    glyph: fragment.current.childNodes.length ? fragment.current : glyph,
    glyphColor,
    scale,
  });

  return createPortal(<>{children}</>, fragment.current);
});

export const PinElement = forwardRef<google.maps.marker.PinElement, PinElementProps>(function PinElement(props, ref) {
  const markerLib = useImportLibrary('marker');

  if (!markerLib?.PinElement) {
    console.error('PinElement is not available');
    return null;
  }

  return (
    <>
      <PinElementImpl ref={ref} lib={markerLib} {...props} />
    </>
  );
});
