import { useEffect } from 'react';

export const useMvcObjectEventEffect = (
  tg: google.maps.MVCObject | null,
  key: string,
  callback: Function | undefined,
) =>
  useEffect(() => {
    if (!tg || !callback) {
      return;
    }

    const listener = tg.addListener(key, callback);

    return () => google.maps.event.removeListener(listener);
  }, [tg, callback]);
