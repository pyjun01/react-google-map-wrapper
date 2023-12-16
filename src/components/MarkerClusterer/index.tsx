import { forwardRef, useEffect, useMemo, useRef } from 'react';

import * as MarkerClustererModule from '@googlemaps/markerclusterer';
import type { MarkerClustererOptions } from '@googlemaps/markerclusterer';

import { MarkerClustererProvider } from './Context';
import { MarkerClustererProps } from './type';
import { passRef } from '../../utils/passRef';
import { useMapContext } from '../Provider/MapProvider';
import { useEvent } from '../../hooks/useEvent';

const createMarkerClusterer = (options: MarkerClustererOptions) => new MarkerClustererModule.MarkerClusterer(options);

export const MarkerClusterer = forwardRef<MarkerClustererModule.MarkerClusterer, MarkerClustererProps>(function MarkerClusterer(
  { children, algorithmOptions, algorithm, renderer, onClusterClick = null },
  ref
) {
  const map = useMapContext();
  const markers = useRef(new Set<google.maps.Marker | google.maps.marker.AdvancedMarkerElement>());

  const onCachedClusterClick = useEvent(onClusterClick);

  const markerCluster = useRef(
    createMarkerClusterer({
      map,
      algorithmOptions,
      algorithm,
      renderer,
      onClusterClick: onCachedClusterClick ?? undefined,
    })
  );

  const value = useMemo(
    () => ({
      addMarker: (marker) => (markers.current.add(marker), markerCluster.current.addMarker(marker)),
      removeMarker: (marker) => (markers.current.delete(marker), markerCluster.current.removeMarker(marker)),
    }),
    []
  );

  useEffect(() => {
    passRef(ref, markerCluster.current);
  }, []);

  useEffect(() => {
    markerCluster.current.setMap(null);
    markerCluster.current = createMarkerClusterer({
      map,
      markers: Array.from(markers.current),
      algorithmOptions,
      algorithm,
      renderer,
      onClusterClick: onCachedClusterClick ?? undefined,
    });
  }, [algorithmOptions, algorithm, renderer]);

  return <MarkerClustererProvider value={value}>{children}</MarkerClustererProvider>;
});
