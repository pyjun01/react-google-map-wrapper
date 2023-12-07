import { useEffect } from 'react';

import { PinElementProps } from 'src/components/PinElement/type';

export const useApplyPinElementOptions = (
  pinElement: google.maps.marker.PinElement | null,
  { background, borderColor, glyph, glyphColor, scale }: PinElementProps
) => {
  useEffect(() => {
    if (pinElement) {
      pinElement.background = background;
    }
  }, [background]);

  useEffect(() => {
    if (pinElement) {
      pinElement.borderColor = borderColor;
    }
  }, [borderColor]);

  useEffect(() => {
    if (pinElement) {
      pinElement.glyph = glyph;
    }
  }, [glyph]);

  useEffect(() => {
    if (pinElement) {
      pinElement.glyphColor = glyphColor;
    }
  }, [glyphColor]);

  useEffect(() => {
    if (pinElement) {
      pinElement.scale = scale;
    }
  }, [scale]);
};
