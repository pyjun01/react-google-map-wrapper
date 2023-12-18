import { CustomMarker, GoogleMap } from "react-google-map-wrapper";

import { Container } from "../../Container";

export function CustomMarkerEx() {
  return (
    <Container>
      <GoogleMap
        className='h-[400px]'
        containerProps={{
          id:'my-map'
        }}
        zoom={13}
        center={{ lat: 37.5111158, lng: 127.098167 }}
        mapOptions={{
          mapTypeId: 'satellite',
        }}
      >
        <CustomMarker lat={37.5111158} lng={127.098167}>
          <div className='px-5 py-3 rounded bg-[#0af] text-lg text-white'>
            $ 2.5
          </div>
        </CustomMarker>
        {/* draggable */}
        <CustomMarker lat={37.5111158} lng={127.05} draggable>
          <div className='px-5 py-3 rounded bg-[#0af] text-lg text-white'>
            $ 2.5 (draggable)
          </div>
        </CustomMarker>
      </GoogleMap>
    </Container>
  )
}
