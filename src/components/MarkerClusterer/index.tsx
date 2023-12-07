import { forwardRef, useEffect, useMemo, useRef } from 'react';

import { MarkerClusterer as MarkerClustererClass, MarkerClustererOptions } from '@googlemaps/markerclusterer';

import { MarkerClustererProvider } from './Context';
import { MarkerClustererProps } from './type';
import { passRef } from '../../utils/passRef';
import { useMapContext } from '../Provider/MapProvider';

const createMarkerClusterer = (options: MarkerClustererOptions) => new MarkerClustererClass(options);

export const MarkerClusterer = forwardRef<MarkerClustererClass, MarkerClustererProps>(function MarkerClusterer(
  { children, algorithmOptions, algorithm, renderer, onClusterClick },
  ref
) {
  const map = useMapContext();
  const markers = useRef(new Set<google.maps.Marker | google.maps.marker.AdvancedMarkerElement>());
  const markerCluster = useRef(
    createMarkerClusterer({
      map,
      algorithmOptions,
      algorithm,
      renderer,
      onClusterClick,
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
      onClusterClick,
    });
  }, [algorithmOptions, algorithm, renderer, onClusterClick]);

  return <MarkerClustererProvider value={value}>{children}</MarkerClustererProvider>;
});
