import { ReactNode } from 'react';

export interface OverlayMarker extends google.maps.OverlayView {
  map: google.maps.Map;
  container: HTMLDivElement;
  position: google.maps.LatLngLiteral;
  draggable: boolean;
  eventMap: Map<String, (position: google.maps.LatLngLiteral) => void>;

  addDragEventListener(key: string, fn: (position: google.maps.LatLngLiteral) => void): () => void;
  updatePosition(position: google.maps.LatLngLiteral): void;
  setDraggable(draggable: boolean);
}

export interface CustomMarkerEvent {
  onDragStart?: (position: google.maps.LatLngLiteral) => void;
  onDrag?: (position: google.maps.LatLngLiteral) => void;
  onDragEnd?: (position: google.maps.LatLngLiteral) => void;
}

export interface CustomMarkerProps extends CustomMarkerEvent {
  children?: ReactNode;
  lat: number;
  lng: number;
  draggable?: unknown;
  skipDragOnClickable?: unknown;
}
