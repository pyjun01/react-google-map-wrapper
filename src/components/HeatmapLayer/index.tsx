import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { passRef } from '../../utils/passRef';
import { useMapContext } from '../Provider/MapProvider';
import { HeatmapLayerProps } from './type';
import { useImportLibrary } from '../../hooks/useImportLibrary';

export const HeatmapLayer = forwardRef<
  google.maps.visualization.HeatmapLayer,
  HeatmapLayerProps
>(function HeatmapLayer(
  {
    data,
    dissipating,
    gradient,
    maxIntensity,
    opacity,
    radius,
    hidden = false,
  },
  ref,
) {
  const map = useMapContext();
  const visualizationLib = useImportLibrary('visualization');
  const [heatmap, setHeatmap] =
    useState<google.maps.visualization.HeatmapLayer | null>(null);

  useEffect(() => {
    if (!visualizationLib?.HeatmapLayer) {
      return;
    }

    const heatmap = new visualizationLib.HeatmapLayer({
      map,
      data,
      dissipating,
      gradient,
      maxIntensity,
      opacity,
      radius,
    });

    setHeatmap(heatmap);
    passRef(ref, heatmap);

    return () => {
      heatmap.setMap(null);
    };
  }, [visualizationLib?.HeatmapLayer]);

  useEffect(() => {
    if (data) {
      heatmap?.setData(data);
    }
  }, [data]);

  useEffect(() => {
    heatmap?.setMap(hidden ? null : map);
  }, [hidden]);

  useEffect(() => {
    heatmap?.setOptions({
      gradient,
    });
  }, [gradient]);

  useEffect(() => {
    heatmap?.setOptions({
      dissipating,
      maxIntensity,
      opacity,
      radius,
    });
  }, [dissipating, gradient, maxIntensity, opacity, radius]);

  return null;
});
