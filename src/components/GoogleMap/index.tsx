import {
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import { MapEvent } from './type';
import { useApplyMapOptions } from '../../../src/hooks/useApplyMapOptions';
import { useApplyMapEvent } from '../../hooks/useApplyMapEvent';
import { useImportLibrary } from '../../hooks/useImportLibrary';
import { passRef } from '../../utils/passRef';
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

export const GoogleMap = forwardRef<google.maps.Map, GoogleMapProps>(
  function GoogleMap(
    {
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
    },
    ref,
  ) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapsLib = useImportLibrary('maps');
    const [map, setMap] = useState<google.maps.Map | null>(null);

    useEffect(() => {
      if (!mapsLib?.Map) {
        return;
      }

      const map = new mapsLib.Map(containerRef.current!, {
        center: initialCenter || center || mapOptions.center,
        zoom: initialZoom || zoom || mapOptions.zoom,
        ...mapOptions,
      });

      setMap(map);
      onLoad?.(map);

      passRef(ref, map);
    }, [mapsLib?.Map]);

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
  },
);
