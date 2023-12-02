import { useEffect } from 'react';

import { PolygonEvent, PolygonProps } from '../components/Polygon/type';

export const useApplyPolygonOptions = (
  polyline: google.maps.Polygon | null,
  { paths, ...options }: Omit<PolygonProps, keyof PolygonEvent>,
) => {
  useEffect(() => {
    polyline?.setOptions(options);
  }, Object.values(options));

  useEffect(() => {
    polyline?.setPaths(paths ?? []);
  }, [paths]);
};
