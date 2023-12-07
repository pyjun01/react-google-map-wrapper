export interface PolylineEvent {
  onClick?: (polyline: google.maps.Polyline, event: google.maps.PolyMouseEvent) => void;
  onContextmenu?: (polyline: google.maps.Polyline, event: google.maps.PolyMouseEvent) => void;
  onDblClick?: (polyline: google.maps.Polyline, event: google.maps.PolyMouseEvent) => void;
  onDrag?: (polyline: google.maps.Polyline, event: google.maps.MapMouseEvent) => void;
  onDragEnd?: (polyline: google.maps.Polyline, event: google.maps.MapMouseEvent) => void;
  onDragStart?: (polyline: google.maps.Polyline, event: google.maps.MapMouseEvent) => void;
  onMouseDown?: (polyline: google.maps.Polyline, event: google.maps.PolyMouseEvent) => void;
  onMouseMove?: (polyline: google.maps.Polyline, event: google.maps.PolyMouseEvent) => void;
  onMouseOut?: (polyline: google.maps.Polyline, event: google.maps.PolyMouseEvent) => void;
  onMouseOver?: (polyline: google.maps.Polyline, event: google.maps.PolyMouseEvent) => void;
  onMouseUp?: (polyline: google.maps.Polyline, event: google.maps.PolyMouseEvent) => void;
}

export interface PolylineProps extends Partial<Omit<google.maps.PolylineOptions, 'map'>>, PolylineEvent {}
