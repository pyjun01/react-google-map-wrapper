export interface OverlayMarker extends google.maps.OverlayView {
  map: google.maps.Map;
  container: HTMLDivElement;
  position: google.maps.LatLngLiteral;
  draggable: boolean;
  eventMap: Map<String, (position: google.maps.LatLngLiteral) => void>;

  addDragEventListener(
    key: string,
    fn: (position: google.maps.LatLngLiteral) => void,
  ): () => void;
  updatePosition(position: google.maps.LatLngLiteral): void;
  setDraggable(draggable: boolean);
}
