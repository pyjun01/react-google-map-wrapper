import { useEffect } from 'react';

import { AdvancedMarkerProps } from 'src/components/AdvancedMarker/type';

export const useApplyAdvancedMarkerOptions = (
  advancedMarker: google.maps.marker.AdvancedMarkerElement | null,
  { lat, lng, collisionBehavior, content, gmpDraggable, title, zIndex }: AdvancedMarkerProps
) => {
  useEffect(() => {
    if (advancedMarker) {
      advancedMarker.position = { lat, lng };
    }
  }, [lat, lng]);

  useEffect(() => {
    if (advancedMarker) {
      advancedMarker.content = content;
    }
  }, [content]);

  useEffect(() => {
    if (advancedMarker) {
      advancedMarker.collisionBehavior = collisionBehavior;
    }
  }, [collisionBehavior]);

  useEffect(() => {
    if (advancedMarker) {
      advancedMarker.gmpDraggable = gmpDraggable;
    }
  }, [gmpDraggable]);

  useEffect(() => {
    if (advancedMarker) {
      advancedMarker.title = title ?? '';
    }
  }, [title]);

  useEffect(() => {
    if (advancedMarker) {
      advancedMarker.zIndex = zIndex;
    }
  }, [zIndex]);
};
