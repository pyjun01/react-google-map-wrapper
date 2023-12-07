import { ReactNode } from 'react';

import { MarkerClustererOptions } from '@googlemaps/markerclusterer';

export interface MarkerClustererProps extends Omit<MarkerClustererOptions, 'markers' | 'map'> {
  children?: ReactNode;
}
