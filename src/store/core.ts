import { useEffect, useReducer } from 'react';

export enum LoadingStatus {
  LOADING = 'LOADING',
  FAILURE = 'FAILURE',
  SUCCESS = 'SUCCESS',
}

type Store = {
  status: LoadingStatus;
  setStatus: (status: LoadingStatus) => void;
};

const store: Store = {
  status: LoadingStatus.LOADING,
  setStatus(status) {
    this.status = status;
    storeSub.notify();
  },
};

const storeSub = {
  listeners: new Set<(v: Store) => void>(),
  sub(listener: (v: Store) => void) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  },
  notify() {
    this.listeners.forEach((fn) => fn(store));
  },
};

export const setLoadingStatus = store.setStatus.bind(store);

export const useApiLoadingStatus = () => {
  const loadingStatus = store.status;

  const [_, rerender] = useReducer((_) => _ + 1, 0);
  useEffect(
    () =>
      storeSub.sub(() => {
        rerender();
      }),
    []
  );

  return loadingStatus;
};
