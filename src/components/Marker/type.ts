export interface MarkerEvent {
  onAnimationChanged?: (marker: google.maps.Marker) => void;
  onClick?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onClickableChanged?: (marker: google.maps.Marker) => void;
  onContextMenu?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onCursorChanged?: (marker: google.maps.Marker) => void;
  onDblClick?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onDrag?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onDragEnd?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onDraggableChanged?: (marker: google.maps.Marker) => void;
  onDragStart?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onFlatChanged?: (marker: google.maps.Marker) => void;
  onIconChanged?: (marker: google.maps.Marker) => void;
  onMouseDown?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onMouseOut?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onMouseOver?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onMouseUp?: (
    marker: google.maps.Marker,
    event: google.maps.MapMouseEvent,
  ) => void;
  onPositionChanged?: (marker: google.maps.Marker) => void;
  onShapeChanged?: (marker: google.maps.Marker) => void;
  onTitleChanged?: (marker: google.maps.Marker) => void;
  onVisibleChanged?: (marker: google.maps.Marker) => void;
  onZindexChanged?: (marker: google.maps.Marker) => void;
}

export interface MarkerProps
  extends Omit<google.maps.MarkerOptions, 'position' | 'map' | 'draggable'>,
    MarkerEvent {
  lat: number;
  lng: number;
  draggable?: unknown;
  skipDragOnClickable?: unknown;
}
