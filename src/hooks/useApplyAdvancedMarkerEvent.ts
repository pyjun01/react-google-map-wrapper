import { AdvancedMarkerEvent } from 'src/components/AdvancedMarker/type';

import { useMvcObjectEventEffect } from './useMvcObjectEventEffect';

export const useApplyAdvancedMarkerEvent = (
  advancedMarker: google.maps.marker.AdvancedMarkerElement | null,
  { onClick, onDrag, onDragEnd, onDragStart, onGmpClick }: AdvancedMarkerEvent
) => {
  useMvcObjectEventEffect(advancedMarker, 'click', onClick);
  useMvcObjectEventEffect(advancedMarker, 'drag', onDrag);
  useMvcObjectEventEffect(advancedMarker, 'dragend', onDragEnd);
  useMvcObjectEventEffect(advancedMarker, 'dragstart', onDragStart);
  useMvcObjectEventEffect(advancedMarker, 'gmp_click', onGmpClick);
};
