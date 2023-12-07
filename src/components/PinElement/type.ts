import { ReactNode } from 'react';

export interface PinElementProps extends google.maps.marker.PinElementOptions {
  children?: Exclude<ReactNode, Iterable<ReactNode>>;
}
