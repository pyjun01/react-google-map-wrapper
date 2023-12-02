import { MarkerClustererOptions } from '@googlemaps/markerclusterer';
import { ReactNode } from 'react';

export interface MarkerClustererProps
  extends Omit<MarkerClustererOptions, 'markers' | 'map' | ''> {
  children?: ReactNode;
}
