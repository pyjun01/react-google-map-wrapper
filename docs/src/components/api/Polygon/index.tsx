import { GoogleMap, Polygon, Polyline } from "react-google-map-wrapper";

import { Container } from "../../Container";

const triangleCoords = [
  { lat: 25.774, lng: -80.19 },
  { lat: 18.466, lng: -66.118 },
  { lat: 32.321, lng: -64.757 },
];

export function PolygonEx() {
  return (
    <Container>
      <GoogleMap
        className='h-[400px]'
        initialZoom={5}
        initialCenter={{ lat: 24.886, lng: -70.268 }}
        mapOptions={{
          mapTypeId: "terrain",
        }}
      >
        <Polygon
          paths={triangleCoords}
          strokeColor={"#FF0000"}
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor={"#FF0000"}
          fillOpacity={0.35}
        />
      </GoogleMap>
    </Container>
  );
}
