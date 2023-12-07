import { useEffect } from 'react';

export const useMvcObjectEventEffect = (
  tg: Pick<google.maps.MVCObject, 'addListener'> | null,
  key: string,
  callback: Function | undefined,
) =>
  useEffect(() => {
    if (!tg || !callback) {
      return;
    }

    const listener = tg.addListener(key, callback.bind(null, tg));

    return () => google.maps.event.removeListener(listener);
  }, [tg, callback]);
