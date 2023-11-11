export interface MarkerEvent {
  onAnimationChanged?: () => void;
  onClick?: (event: google.maps.MapMouseEvent) => void;
  onClickableChanged?: () => void;
  onContextMenu?: (event: google.maps.MapMouseEvent) => void;
  onCursorChanged?: () => void;
  onDblClick?: (event: google.maps.MapMouseEvent) => void;
  onDrag?: (event: google.maps.MapMouseEvent) => void;
  onDragEnd?: (event: google.maps.MapMouseEvent) => void;
  onDraggableChanged?: () => void;
  onDragStart?: (event: google.maps.MapMouseEvent) => void;
  onFlatChanged?: () => void;
  onIconChanged?: () => void;
  onMouseDown?: (event: google.maps.MapMouseEvent) => void;
  onMouseOut?: (event: google.maps.MapMouseEvent) => void;
  onMouseOver?: (event: google.maps.MapMouseEvent) => void;
  onMouseUp?: (event: google.maps.MapMouseEvent) => void;
  onPositionChanged?: () => void;
  onShapeChanged?: () => void;
  onTitleChanged?: () => void;
  onVisibleChanged?: () => void;
  onZindexChanged?: () => void;
}

export interface MarkerProps
  extends Omit<google.maps.MarkerOptions, 'position' | 'map' | 'draggable'>,
    MarkerEvent {
  lat: number;
  lng: number;
  draggable?: unknown;
  skipDragOnClickable?: unknown;
}
