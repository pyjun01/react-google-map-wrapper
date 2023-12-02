import { useEffect } from 'react';

import { CircleEvent, CircleProps } from '../components/Circle/type';

export const useApplyCircleOptions = (
  circle: google.maps.Circle | null,
  { center, ...options }: Omit<CircleProps, keyof CircleEvent>,
) => {
  useEffect(() => {
    circle?.setOptions(options);
  }, Object.values(options));

  useEffect(() => {
    circle?.setCenter(center ?? null);
  }, [center]);
};
