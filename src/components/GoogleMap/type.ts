export interface MapEvent {
  onBoundsChanged?: () => void;
  onCenterChanged?: () => void;
  onClick?: (
    event: google.maps.MapMouseEvent | google.maps.IconMouseEvent,
  ) => void;
  onContextmenu?: (event: google.maps.MapMouseEvent) => void;
  onDblclick?: (event: google.maps.MapMouseEvent) => void;
  onDrag?: () => void;
  onDragEnd?: () => void;
  onDragStart?: () => void;
  onHeadingChanged?: () => void;
  onIdle?: () => void;
  onIsFractionalZoomEnabledChanged?: () => void;
  onMapCapabilitiesChanged?: () => void;
  onMapTypeIdChanged?: () => void;
  onMouseMove?: (event: google.maps.MapMouseEvent) => void;
  onMouseOut?: (event: google.maps.MapMouseEvent) => void;
  onMouseOver?: (event: google.maps.MapMouseEvent) => void;
  onProjectionChanged?: () => void;
  onRenderingTypeChanged?: () => void;
  onTilesLoaded?: () => void;
  onTiltChanged?: () => void;
  onZoomChanged?: () => void;
}
