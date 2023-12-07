import { ReactNode } from 'react';

export interface HeatmapLayerProps extends Omit<google.maps.visualization.HeatmapLayerOptions, 'map'> {
  children?: ReactNode;
  hidden?: boolean;
}
