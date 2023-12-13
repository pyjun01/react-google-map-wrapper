import { useCallback, useLayoutEffect, useMemo, useRef } from 'react';

type Fn<ARGS extends any[], R> = (...args: ARGS) => R;

export const useEvent = <A extends unknown[], R>(fn: Fn<A, R> | null): Fn<A, R> | null => {
  let ref = useRef<Fn<A, R> | null>(() => {
    throw new Error("Can't called");
  });

  useLayoutEffect(() => {
    ref.current = fn;
  });

  const callback = useCallback(
    (...args: A): R => ref.current?.(...args) as R,
    [],
  );

  return fn ? callback : null;
};
