import { ComponentProps, createContext, useContext } from 'react';

export interface AnchorContextData {
  setAnchor: (anchor: google.maps.InfoWindowOpenOptions['anchor']) => void;
}

export const AnchorContext = createContext<AnchorContextData>({
  setAnchor: () => {},
});

export const useSetAnchor = () => useContext(AnchorContext).setAnchor;

export function AnchorProvider(props: ComponentProps<typeof AnchorContext.Provider>) {
  return <AnchorContext.Provider {...props} />;
}
