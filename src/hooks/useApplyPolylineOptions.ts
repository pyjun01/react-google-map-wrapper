import { useEffect } from 'react';

import { PolylineEvent, PolylineProps } from 'src/components';

export const useApplyPolylineOptions = (polyline: google.maps.Polyline | null, { path, ...options }: Omit<PolylineProps, keyof PolylineEvent>) => {
  useEffect(() => {
    polyline?.setOptions(options);
  }, Object.values(options));

  useEffect(() => {
    polyline?.setPath(path ?? []);
  }, [path]);
};
