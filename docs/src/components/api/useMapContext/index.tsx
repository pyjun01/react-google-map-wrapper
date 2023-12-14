import { useEffect } from "react";
import { GoogleMap, Marker, useMapContext } from "react-google-map-wrapper";

import { Container } from "../../Container";

function MapContent() {
  const map = useMapContext();

  console.log(map);

  useEffect(() => {
    setTimeout(() => {
      map.fitBounds({
        south: 37.5211158,
        north: 37.5011158,
        west: 127.098167,
        east: 127.098167,
      })
    }, 3000);
  }, []);

  return (
    <Marker lat={37.5111158} lng={127.098167} title='Lotte World' />
  )
}

export function UseMapContextEx() {
  return (
    <Container>
      <GoogleMap
        className='h-[400px]'
        zoom={16}
        center={{ lat: 37.5111158, lng: 127.098167 }}
      >
        <MapContent />
      </GoogleMap>
    </Container>
  )
}
