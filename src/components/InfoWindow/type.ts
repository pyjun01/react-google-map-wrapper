import { ReactElement } from 'react';

export interface InfoWindowEvent {
  onCloseClick?: () => void;
  onContentChanged?: () => void;
  onDomReady?: () => void;
  onPositionChanged?: () => void;
  onVisible?: () => void;
  onZIndexChanged?: () => void;
}

export interface InfoWindowProps
  extends google.maps.InfoWindowOptions,
    InfoWindowEvent {
  children?: ReactElement;
  open?: boolean;
  shouldFocus?: boolean;
}
