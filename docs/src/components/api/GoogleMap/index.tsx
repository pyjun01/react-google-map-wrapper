import { GoogleMap } from "react-google-map-wrapper";

import { Container } from "../../Container";

export function GoogleMapEx() {
  return (
    <Container>
      <GoogleMap
        // you can pass props to map container element.
        className='h-[400px]'
        containerProps={{
          id:'my-map'
        }}
        // map options
        zoom={16}
        center={{ lat: 37.5111158, lng: 127.098167 }}
        mapOptions={{
          mapTypeId: 'satellite',
        }}
      />
    </Container>
  )
}
