export interface CircleEvent {
  onCenterChanged?: (circle: google.maps.Circle) => void;
  onClick?: (circle: google.maps.Circle, event: google.maps.PolyMouseEvent) => void;
  onContextmenu?: (circle: google.maps.Circle, event: google.maps.PolyMouseEvent) => void;
  onDblClick?: (circle: google.maps.Circle, event: google.maps.PolyMouseEvent) => void;
  onDrag?: (circle: google.maps.Circle, event: google.maps.MapMouseEvent) => void;
  onDragEnd?: (circle: google.maps.Circle, event: google.maps.MapMouseEvent) => void;
  onDragStart?: (circle: google.maps.Circle, event: google.maps.MapMouseEvent) => void;
  onMouseDown?: (circle: google.maps.Circle, event: google.maps.PolyMouseEvent) => void;
  onMouseMove?: (circle: google.maps.Circle, event: google.maps.PolyMouseEvent) => void;
  onMouseOut?: (circle: google.maps.Circle, event: google.maps.PolyMouseEvent) => void;
  onMouseOver?: (circle: google.maps.Circle, event: google.maps.PolyMouseEvent) => void;
  onMouseUp?: (circle: google.maps.Circle, event: google.maps.PolyMouseEvent) => void;
  onRadiusChanged?: (circle: google.maps.Circle, event: google.maps.PolyMouseEvent) => void;
}

export interface CircleProps extends Partial<Omit<google.maps.CircleOptions, 'map'>>, CircleEvent {}
