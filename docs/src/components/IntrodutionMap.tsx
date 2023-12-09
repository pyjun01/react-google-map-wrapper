import { GoogleMap, Marker } from 'react-google-map-wrapper';

import { Container } from './Container';

function Map() {
  return (
    <GoogleMap style={{ height: '400px' }} zoom={17} center={{ lat: 37.5709413, lng: 126.977787 }}>
      <Marker lat={37.5709413} lng={126.977787} />
    </GoogleMap>
  )
}

export function IntrodutionMap() {
  return (
    <Container>
      <Map />
    </Container>
  );
}
