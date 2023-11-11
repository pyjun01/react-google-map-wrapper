import { useEffect } from 'react';

export const useApplyMapOptions = (
  map: google.maps.Map | null,
  {
    center,
    clickableIcons,
    heading,
    mapTypeId,
    streetView,
    tilt,
    zoom,
    backgroundColor,
    controlSize,
    disableDefaultUI,
    disableDoubleClickZoom,
    draggableCursor,
    draggingCursor,
    fullscreenControl,
    fullscreenControlOptions,
    gestureHandling,
    isFractionalZoomEnabled,
    keyboardShortcuts,
    mapTypeControl,
    mapTypeControlOptions,
    maxZoom,
    minZoom,
    noClear,
    panControl,
    panControlOptions,
    restriction,
    rotateControl,
    rotateControlOptions,
    scaleControl,
    scaleControlOptions,
    scrollwheel,
    streetViewControl,
    streetViewControlOptions,
    styles,
    zoomControl,
    zoomControlOptions,
  }: google.maps.MapOptions,
) => {
  const useMapOptionEffect = (fn, deps) =>
    useEffect(() => {
      if (map) {
        fn(map);
      }
    }, deps);

  useMapOptionEffect(
    (map: google.maps.Map) => {
      center && map.setCenter(center);
    },
    [center],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setClickableIcons(clickableIcons ?? true);
    },
    [clickableIcons],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      typeof heading === 'number' && map.setHeading(heading);
    },
    [heading],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      mapTypeId && map.setMapTypeId(mapTypeId);
    },
    [mapTypeId],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      streetView && map.setStreetView(streetView);
    },
    [streetView],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      typeof tilt === 'number' && map.setTilt(tilt);
    },
    [tilt],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      typeof zoom === 'number' && map.setZoom(zoom);
    },
    [zoom],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ backgroundColor });
    },
    [backgroundColor],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ controlSize });
    },
    [controlSize],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ disableDefaultUI });
    },
    [disableDefaultUI],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ disableDoubleClickZoom });
    },
    [disableDoubleClickZoom],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ draggableCursor });
    },
    [draggableCursor],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ draggingCursor });
    },
    [draggingCursor],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ fullscreenControl });
    },
    [fullscreenControl],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ fullscreenControlOptions });
    },
    [fullscreenControlOptions?.position],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ gestureHandling });
    },
    [gestureHandling],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ isFractionalZoomEnabled });
    },
    [isFractionalZoomEnabled],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ keyboardShortcuts });
    },
    [keyboardShortcuts],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ mapTypeControl });
    },
    [mapTypeControl],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ mapTypeControlOptions });
    },
    [mapTypeControlOptions],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ maxZoom });
    },
    [maxZoom],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ minZoom });
    },
    [minZoom],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ noClear });
    },
    [noClear],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ panControl });
    },
    [panControl],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ panControlOptions });
    },
    [panControlOptions],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ restriction });
    },
    [restriction],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ rotateControl });
    },
    [rotateControl],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ rotateControlOptions });
    },
    [rotateControlOptions],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ scaleControl });
    },
    [scaleControl],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ scaleControlOptions });
    },
    [scaleControlOptions],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ scrollwheel });
    },
    [scrollwheel],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ streetViewControl });
    },
    [streetViewControl],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ streetViewControlOptions });
    },
    [streetViewControlOptions],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ styles });
    },
    [styles],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ zoomControl });
    },
    [zoomControl],
  );

  useMapOptionEffect(
    (map: google.maps.Map) => {
      map.setOptions({ zoomControlOptions });
    },
    [zoomControlOptions?.position],
  );
};
