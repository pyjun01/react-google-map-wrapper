export interface PolygonEvent {
  onClick?: (polygon: google.maps.Polygon, event: google.maps.PolyMouseEvent) => void;
  onContextmenu?: (polygon: google.maps.Polygon, event: google.maps.PolyMouseEvent) => void;
  onDblClick?: (polygon: google.maps.Polygon, event: google.maps.PolyMouseEvent) => void;
  onDrag?: (polygon: google.maps.Polygon, event: google.maps.MapMouseEvent) => void;
  onDragEnd?: (polygon: google.maps.Polygon, event: google.maps.MapMouseEvent) => void;
  onDragStart?: (polygon: google.maps.Polygon, event: google.maps.MapMouseEvent) => void;
  onMouseDown?: (polygon: google.maps.Polygon, event: google.maps.PolyMouseEvent) => void;
  onMouseMove?: (polygon: google.maps.Polygon, event: google.maps.PolyMouseEvent) => void;
  onMouseOut?: (polygon: google.maps.Polygon, event: google.maps.PolyMouseEvent) => void;
  onMouseOver?: (polygon: google.maps.Polygon, event: google.maps.PolyMouseEvent) => void;
  onMouseUp?: (polygon: google.maps.Polygon, event: google.maps.PolyMouseEvent) => void;
}

export interface PolygonProps extends Partial<Omit<google.maps.PolygonOptions, 'map'>>, PolygonEvent {}
