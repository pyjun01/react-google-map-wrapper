import { ComponentProps, createContext, useContext } from 'react';

export interface MarkerClustererContextData {
  addMarker: (marker: google.maps.Marker) => void;
  removeMarker: (marker: google.maps.Marker) => void;
}

const initialContextData = {
  addMarker: () => {
    throw Error('You must use `useMarkerClusterer` inside of `MarkerClustererProvideer`');
  },
  removeMarker: () => {
    throw Error('You must use `useMarkerClusterer` inside of `MarkerClustererProvideer`');
  },
};

export const MarkerClustererContext = createContext<MarkerClustererContextData>(initialContextData);

export const useMarkerClusterer = () => {
  const data = useContext(MarkerClustererContext);

  if (data === initialContextData) {
    return null;
  }

  return data;
};

export function MarkerClustererProvider(props: ComponentProps<typeof MarkerClustererContext.Provider>) {
  return <MarkerClustererContext.Provider {...props} />;
}
