import { PropsWithChildren, createContext, useContext } from 'react';

// @ts-ignore
export const MapContext = createContext<google.maps.Map>(null);

export const useMapContext = () => {
  const map = useContext(MapContext);

  if (map === null) {
    throw Error('You must use `useMapContext` inside of `GoogleMap`');
  }

  return map;
};

export function MapProvider({
  children,
  value,
}: PropsWithChildren<{ value: google.maps.Map }>) {
  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
}
