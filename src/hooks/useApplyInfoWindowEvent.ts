import { useEffect } from 'react';

import { InfoWindowProps } from 'src/components/InfoWindow/type';

export const useApplyInfoWindowEvent = (
  infoWindow: google.maps.InfoWindow | null,
  {
    onCloseClick,
    onContentChanged,
    onDomReady,
    onPositionChanged,
    onVisible,
    onZIndexChanged,
  }: InfoWindowProps,
) => {
  const useEventEffect = (key, callback) =>
    useEffect(() => {
      if (!infoWindow || !callback) {
        return;
      }

      const listener = infoWindow.addListener(key, callback);

      return () => google.maps.event.removeListener(listener);
    }, [callback]);

  useEventEffect('closeclick', onCloseClick);
  useEventEffect('content_changed', onContentChanged);
  useEventEffect('domready', onDomReady);
  useEventEffect('position_changed', onPositionChanged);
  useEventEffect('visible', onVisible);
  useEventEffect('zindex_changed', onZIndexChanged);
};
