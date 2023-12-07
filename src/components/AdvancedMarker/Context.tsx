import { ComponentProps, createContext, useContext } from 'react';

export interface AdvancedMarkerContentContextData {
  setAdvancedMarkerContent: (content: google.maps.marker.PinElement | null) => void;
}

const AdvancedMarkerContentContext = createContext<AdvancedMarkerContentContextData>({
  setAdvancedMarkerContent: () => {},
});

export const useAdvancedMarkerContent = () => useContext(AdvancedMarkerContentContext);

export function AdvancedMarkerContentProvider({ children, ...props }: ComponentProps<typeof AdvancedMarkerContentContext.Provider>) {
  return <AdvancedMarkerContentContext.Provider {...props}>{children}</AdvancedMarkerContentContext.Provider>;
}
