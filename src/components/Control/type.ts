import { HTMLAttributes } from 'react';

export interface ControlProps extends HTMLAttributes<HTMLDivElement> {
  position?: google.maps.ControlPosition;
}
