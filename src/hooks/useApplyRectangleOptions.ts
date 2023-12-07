import { useEffect } from 'react';

import { RectangleEvent, RectangleProps } from '../components/Rectangle/type';

export const useApplyRectangleOptions = (
  polyline: google.maps.Rectangle | null,
  { bounds, ...options }: Omit<RectangleProps, keyof RectangleEvent>
) => {
  useEffect(() => {
    polyline?.setOptions(options);
  }, Object.values(options));

  useEffect(() => {
    polyline?.setBounds(bounds ?? null);
  }, [bounds]);
};
