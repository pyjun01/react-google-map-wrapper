import { useEffect } from 'react';

export const useApplyMapOptions = (
  map: google.maps.Map | null,
  { center, heading, mapTypeId, streetView, tilt, zoom, ...options }: google.maps.MapOptions
) => {
  const useMapOptionEffect = (fn: (map: google.maps.Map) => void, deps: unknown[]) =>
    useEffect(() => {
      if (map) {
        fn(map);
      }
    }, deps);

  useEffect(() => {
    map?.setOptions(options);
  }, Object.values(options));

  useMapOptionEffect(
    (map) => {
      center && map.setCenter(center);
    },
    [center]
  );

  useMapOptionEffect(
    (map) => {
      typeof heading === 'number' && map.setHeading(heading);
    },
    [heading]
  );

  useMapOptionEffect(
    (map) => {
      mapTypeId && map.setMapTypeId(mapTypeId);
    },
    [mapTypeId]
  );

  useMapOptionEffect(
    (map) => {
      streetView && map.setStreetView(streetView);
    },
    [streetView]
  );

  useMapOptionEffect(
    (map) => {
      typeof tilt === 'number' && map.setTilt(tilt);
    },
    [tilt]
  );

  useMapOptionEffect(
    (map) => {
      typeof zoom === 'number' && map.setZoom(zoom);
    },
    [zoom]
  );
};
