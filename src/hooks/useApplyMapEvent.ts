import { useEffect } from 'react';
import { MapEvent } from 'src/components/GoogleMap/type';

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
  }: MapEvent,
) => {
  const useEventEffect = (key, callback) =>
    useEffect(() => {
      if (!map || !callback) {
        return;
      }

      const listener = map.addListener(key, callback);

      return () => google.maps.event.removeListener(listener);
    }, []);

  useEventEffect('bounds_changed', onBoundsChanged);
  useEventEffect('center_changed', onCenterChanged);
  useEventEffect('click', onClick);
  useEventEffect('contextmenu', onContextmenu);
  useEventEffect('dblclick', onDblclick);
  useEventEffect('drag', onDrag);
  useEventEffect('dragend', onDragEnd);
  useEventEffect('dragstart', onDragStart);
  useEventEffect('heading_changed', onHeadingChanged);
  useEventEffect('idle', onIdle);
  useEventEffect(
    'isfractionalzoomenabled_changed',
    onIsFractionalZoomEnabledChanged,
  );
  useEventEffect('mapcapabilities_changed', onMapCapabilitiesChanged);
  useEventEffect('maptypeid_changed', onMapTypeIdChanged);
  useEventEffect('mousemove', onMouseMove);
  useEventEffect('mouseout', onMouseOut);
  useEventEffect('mouseover', onMouseOver);
  useEventEffect('projection_changed', onProjectionChanged);
  useEventEffect('renderingtype_changed', onRenderingTypeChanged);
  useEventEffect('tilesloaded', onTilesLoaded);
  useEventEffect('tilt_changed', onTiltChanged);
  useEventEffect('zoom_changed', onZoomChanged);
};
