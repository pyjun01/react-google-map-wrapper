import { ReactNode } from 'react';

export interface AdvancedMarkerEvent {
  onClick?: (marker: google.maps.marker.AdvancedMarkerElement, event: google.maps.MapMouseEvent) => void;
  onDrag?: (marker: google.maps.marker.AdvancedMarkerElement, event: google.maps.MapMouseEvent) => void;
  onDragEnd?: (marker: google.maps.marker.AdvancedMarkerElement, event: google.maps.MapMouseEvent) => void;
  onDragStart?: (marker: google.maps.marker.AdvancedMarkerElement, event: google.maps.MapMouseEvent) => void;
  onGmpClick?: (marker: google.maps.marker.AdvancedMarkerElement, evnet: google.maps.marker.AdvancedMarkerClickEvent) => void;
}

export interface AdvancedMarkerProps extends Omit<google.maps.marker.AdvancedMarkerElementOptions, 'position' | 'map'>, AdvancedMarkerEvent {
  lat: number;
  lng: number;
  children?: Exclude<ReactNode, Iterable<ReactNode>>;
  hidden?: boolean;
}
