export interface RectangleEvent {
  onBoundsChanged?: (rectangle: google.maps.Rectangle) => void;
  onClick?: (rectangle: google.maps.Rectangle, event: google.maps.PolyMouseEvent) => void;
  onContextmenu?: (rectangle: google.maps.Rectangle, event: google.maps.PolyMouseEvent) => void;
  onDblClick?: (rectangle: google.maps.Rectangle, event: google.maps.PolyMouseEvent) => void;
  onDrag?: (rectangle: google.maps.Rectangle, event: google.maps.MapMouseEvent) => void;
  onDragEnd?: (rectangle: google.maps.Rectangle, event: google.maps.MapMouseEvent) => void;
  onDragStart?: (rectangle: google.maps.Rectangle, event: google.maps.MapMouseEvent) => void;
  onMouseDown?: (rectangle: google.maps.Rectangle, event: google.maps.PolyMouseEvent) => void;
  onMouseMove?: (rectangle: google.maps.Rectangle, event: google.maps.PolyMouseEvent) => void;
  onMouseOut?: (rectangle: google.maps.Rectangle, event: google.maps.PolyMouseEvent) => void;
  onMouseOver?: (rectangle: google.maps.Rectangle, event: google.maps.PolyMouseEvent) => void;
  onMouseUp?: (rectangle: google.maps.Rectangle, event: google.maps.PolyMouseEvent) => void;
}

export interface RectangleProps extends Partial<Omit<google.maps.RectangleOptions, 'map'>>, RectangleEvent {}
