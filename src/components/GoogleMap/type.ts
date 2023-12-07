export interface MapEvent {
  onBoundsChanged?: (map: google.maps.Map) => void;
  onCenterChanged?: (map: google.maps.Map) => void;
  onClick?: (map: google.maps.Map, event: google.maps.MapMouseEvent | google.maps.IconMouseEvent) => void;
  onContextmenu?: (map: google.maps.Map, event: google.maps.MapMouseEvent) => void;
  onDblclick?: (map: google.maps.Map, event: google.maps.MapMouseEvent) => void;
  onDrag?: (map: google.maps.Map) => void;
  onDragEnd?: (map: google.maps.Map) => void;
  onDragStart?: (map: google.maps.Map) => void;
  onHeadingChanged?: (map: google.maps.Map) => void;
  onIdle?: (map: google.maps.Map) => void;
  onIsFractionalZoomEnabledChanged?: (map: google.maps.Map) => void;
  onMapCapabilitiesChanged?: (map: google.maps.Map) => void;
  onMapTypeIdChanged?: (map: google.maps.Map) => void;
  onMouseMove?: (map: google.maps.Map, event: google.maps.MapMouseEvent) => void;
  onMouseOut?: (map: google.maps.Map, event: google.maps.MapMouseEvent) => void;
  onMouseOver?: (map: google.maps.Map, event: google.maps.MapMouseEvent) => void;
  onProjectionChanged?: (map: google.maps.Map) => void;
  onRenderingTypeChanged?: (map: google.maps.Map) => void;
  onTilesLoaded?: (map: google.maps.Map) => void;
  onTiltChanged?: (map: google.maps.Map) => void;
  onZoomChanged?: (map: google.maps.Map) => void;
}
