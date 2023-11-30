import { useEffect } from 'react';

import { PolylineEvent, PolylineProps } from 'src/components';

export const useApplyPolylineOptions = (
  polyline: google.maps.Polyline | null,
  {
    clickable,
    draggable,
    editable,
    geodesic,
    icons,
    path,
    strokeColor,
    strokeOpacity,
    strokeWeight,
    visible,
    zIndex,
  }: Omit<PolylineProps, keyof PolylineEvent>,
) => {
  const useSetOptionEffect = (option: Partial<google.maps.PolylineOptions>) =>
    useEffect(() => {
      polyline?.setOptions(option);
    }, Object.values(option));

  useSetOptionEffect({ clickable });
  useSetOptionEffect({ draggable: !!draggable });
  useSetOptionEffect({ draggable: !!editable });
  useSetOptionEffect({ geodesic });
  useSetOptionEffect({ icons });
  useSetOptionEffect({ path: path ?? null });
  useSetOptionEffect({ strokeColor });
  useSetOptionEffect({ strokeOpacity });
  useSetOptionEffect({ strokeWeight });
  useSetOptionEffect({ visible: !!visible });
  useSetOptionEffect({ zIndex });
};
