import { PropsWithChildren, createContext, useContext } from 'react';

// @ts-ignore
export const MarkerContext = createContext<google.maps.Marker>(null);

export const useMarkerContext = () => {
  const marker = useContext(MarkerContext);

  if (marker === null) {
    throw Error('You must use `useMarkerContext` inside of `Marker`');
  }

  return marker;
};

export interface MarkerProvider
  extends PropsWithChildren<{ value: google.maps.Marker }> {}

export function MarkerProvider({ children, value }: MarkerProvider) {
  return (
    <MarkerContext.Provider value={value}>{children}</MarkerContext.Provider>
  );
}
