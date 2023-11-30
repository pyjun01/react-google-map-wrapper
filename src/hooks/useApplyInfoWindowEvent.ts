import { useMvcObjectEventEffect } from './useMvcObjectEventEffect';
import { InfoWindowProps } from '../components/InfoWindow/type';

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
  useMvcObjectEventEffect(infoWindow, 'closeclick', onCloseClick);
  useMvcObjectEventEffect(infoWindow, 'content_changed', onContentChanged);
  useMvcObjectEventEffect(infoWindow, 'domready', onDomReady);
  useMvcObjectEventEffect(infoWindow, 'position_changed', onPositionChanged);
  useMvcObjectEventEffect(infoWindow, 'visible', onVisible);
  useMvcObjectEventEffect(infoWindow, 'zindex_changed', onZIndexChanged);
};
