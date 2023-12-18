import { GoogleMap, Rectangle } from "react-google-map-wrapper";

import { Container } from "../../Container";

export function RectangleEx() {
  return (
    <Container>
      <GoogleMap
        className='h-[400px]'
        initialZoom={11}
        initialCenter={{ lat: 33.678, lng: -116.243 }}
        mapOptions={{
          mapTypeId: "terrain",
        }}
      >
        <Rectangle
          strokeColor="#FF0000"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#FF0000"
          fillOpacity={0.35}
          bounds={{
            north: 33.685,
            south: 33.671,
            east: -116.234,
            west: -116.251,
          }}
        />
      </GoogleMap>
    </Container>
  );
}
