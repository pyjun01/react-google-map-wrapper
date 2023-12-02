export interface PolygonEvent {
  onClick?: (event: google.maps.PolyMouseEvent) => void;
  onContextmenu?: (event: google.maps.PolyMouseEvent) => void;
  onDblClick?: (event: google.maps.PolyMouseEvent) => void;
  onDrag?: (event: google.maps.MapMouseEvent) => void;
  onDragEnd?: (event: google.maps.MapMouseEvent) => void;
  onDragStart?: (event: google.maps.MapMouseEvent) => void;
  onMouseDown?: (event: google.maps.PolyMouseEvent) => void;
  onMouseMove?: (event: google.maps.PolyMouseEvent) => void;
  onMouseOut?: (event: google.maps.PolyMouseEvent) => void;
  onMouseOver?: (event: google.maps.PolyMouseEvent) => void;
  onMouseUp?: (event: google.maps.PolyMouseEvent) => void;
}

export interface PolygonProps
  extends Partial<Omit<google.maps.PolygonOptions, 'map'>>,
    PolygonEvent {}
