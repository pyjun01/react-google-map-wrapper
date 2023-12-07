import { useMvcObjectEventEffect } from './useMvcObjectEventEffect';
import { MapEvent } from '../components/GoogleMap/type';

export const useApplyMapEvent = (
  map: google.maps.Map | null,
  {
    onBoundsChanged,
    onCenterChanged,
    onClick,
    onContextmenu,
    onDblclick,
    onDrag,
    onDragEnd,
    onDragStart,
    onHeadingChanged,
    onIdle,
    onIsFractionalZoomEnabledChanged,
    onMapCapabilitiesChanged,
    onMapTypeIdChanged,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onProjectionChanged,
    onRenderingTypeChanged,
    onTilesLoaded,
    onTiltChanged,
    onZoomChanged,
  }: MapEvent
) => {
  useMvcObjectEventEffect(map, 'bounds_changed', onBoundsChanged);
  useMvcObjectEventEffect(map, 'center_changed', onCenterChanged);
  useMvcObjectEventEffect(map, 'click', onClick);
  useMvcObjectEventEffect(map, 'contextmenu', onContextmenu);
  useMvcObjectEventEffect(map, 'dblclick', onDblclick);
  useMvcObjectEventEffect(map, 'drag', onDrag);
  useMvcObjectEventEffect(map, 'dragend', onDragEnd);
  useMvcObjectEventEffect(map, 'dragstart', onDragStart);
  useMvcObjectEventEffect(map, 'heading_changed', onHeadingChanged);
  useMvcObjectEventEffect(map, 'idle', onIdle);
  useMvcObjectEventEffect(map, 'isfractionalzoomenabled_changed', onIsFractionalZoomEnabledChanged);
  useMvcObjectEventEffect(map, 'mapcapabilities_changed', onMapCapabilitiesChanged);
  useMvcObjectEventEffect(map, 'maptypeid_changed', onMapTypeIdChanged);
  useMvcObjectEventEffect(map, 'mousemove', onMouseMove);
  useMvcObjectEventEffect(map, 'mouseout', onMouseOut);
  useMvcObjectEventEffect(map, 'mouseover', onMouseOver);
  useMvcObjectEventEffect(map, 'projection_changed', onProjectionChanged);
  useMvcObjectEventEffect(map, 'renderingtype_changed', onRenderingTypeChanged);
  useMvcObjectEventEffect(map, 'tilesloaded', onTilesLoaded);
  useMvcObjectEventEffect(map, 'tilt_changed', onTiltChanged);
  useMvcObjectEventEffect(map, 'zoom_changed', onZoomChanged);
};
