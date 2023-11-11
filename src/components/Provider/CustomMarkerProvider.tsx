import { PropsWithChildren, createContext, useContext } from 'react';
import { OverlayMarker } from '../CustomMarker/type';

// @ts-ignore
export const CustomMarkerContext = createContext<OverlayMarker>(null);

export const useCustomMarkerContext = () => {
  const marker = useContext(CustomMarkerContext);

  if (marker === null) {
    throw Error(
      'You must use `useCustomMarkerContext` inside of `CustomMarker`',
    );
  }

  return marker;
};

export interface CustomMarkerProvider
  extends PropsWithChildren<{ value: OverlayMarker }> {}

export function CustomMarkerProvider({
  children,
  value,
}: CustomMarkerProvider) {
  return (
    <CustomMarkerContext.Provider value={value}>
      {children}
    </CustomMarkerContext.Provider>
  );
}
