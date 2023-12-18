import { GoogleMap, Polyline } from "react-google-map-wrapper";

import { Container } from "../../Container";

const flightPlanCoordinates = [
  { lat: 37.772, lng: -122.214 },
  { lat: 21.291, lng: -157.821 },
  { lat: -18.142, lng: 178.431 },
  { lat: -27.467, lng: 153.027 },
];

export function PolylineEx() {
  return (
    <Container>
      <GoogleMap
        className='h-[400px]'
        initialZoom={3}
        initialCenter={{ lat: 0, lng: -180 }}
      >
        <Polyline
          path={flightPlanCoordinates}
          strokeColor="#FF0000"
          strokeOpacity={1.0}
          strokeWeight={2}
          geodesic
        />
      </GoogleMap>
    </Container>
  );
}
