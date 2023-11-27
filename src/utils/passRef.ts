import { ForwardedRef } from 'react';

export const passRef = <T>(ref: ForwardedRef<T>, tg: T) => {
  if (ref) {
    if (typeof ref === 'function') {
      ref(tg);
    } else if ('current' in ref) {
      ref.current = tg;
    }
  }
};
