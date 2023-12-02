import { ReactElement } from 'react';

export interface InfoWindowEvent {
  onCloseClick?: (infoWindow: google.maps.InfoWindow) => void;
  onContentChanged?: (infoWindow: google.maps.InfoWindow) => void;
  onDomReady?: (infoWindow: google.maps.InfoWindow) => void;
  onPositionChanged?: (infoWindow: google.maps.InfoWindow) => void;
  onVisible?: (infoWindow: google.maps.InfoWindow) => void;
  onZIndexChanged?: (infoWindow: google.maps.InfoWindow) => void;
}

export interface InfoWindowProps
  extends google.maps.InfoWindowOptions,
    InfoWindowEvent {
  children?: ReactElement;
  open?: boolean;
  shouldFocus?: boolean;
}
