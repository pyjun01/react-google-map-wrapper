import {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';

import { MapEvent } from './type';
import { useApplyMapOptions } from '../../../src/hooks/useApplyMapOptions';
import { useApplyMapEvent } from '../../hooks/useApplyMapEvent';
import { MapProvider } from '../Provider/MapProvider';

export interface GoogleMapProps extends PropsWithChildren<MapEvent> {
  initialZoom?: google.maps.MapOptions['zoom'];
  initialCenter?: google.maps.MapOptions['center'];
  zoom?: google.maps.MapOptions['zoom'];
  center?: google.maps.MapOptions['center'];
  mapOptions?: google.maps.MapOptions;
  onLoad?: (map: google.maps.Map) => void;
  style?: HTMLAttributes<HTMLDivElement>['style'];
  className?: HTMLAttributes<HTMLDivElement>['className'];
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export function GoogleMap({
  children,
  onLoad,
  // MapOptions
  initialCenter,
  initialZoom,
  zoom,
  center,
  mapOptions = {},
  // MapEvent
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
  style,
  className,
  containerProps = {},
}: GoogleMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    (
      google.maps.importLibrary('maps') as Promise<google.maps.MapsLibrary>
    ).then(({ Map }) => {
      const map = new Map(containerRef.current!, {
        center: initialCenter || center || mapOptions.center,
        zoom: initialZoom || zoom || mapOptions.zoom,
        ...mapOptions,
      });

      setMap(map);
      onLoad?.(map);
    });
  }, []);

  useApplyMapOptions(map, {
    ...mapOptions,
  });

  useApplyMapEvent(map, {
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
  });

  return (
    <div
      {...containerProps}
      style={style || containerProps.style}
      className={className || containerProps.className}
      ref={containerRef}
    >
      {map && <MapProvider value={map}>{children}</MapProvider>}
    </div>
  );
}
