import { AdvancedMarker, GoogleMap, PinElement } from 'react-google-map-wrapper';

import { Container } from '../../Container';

export function AdvancedMarkerEx() {
  return (
    <Container>
      <GoogleMap
        className='h-[400px]'
        containerProps={{
          id: 'my-map',
        }}
        zoom={13}
        center={{ lat: 37.39, lng: -122.05 }}
        mapOptions={{
          mapId: 'DEMO_MAP_ID',
        }}
      >
        <AdvancedMarker lat={37.4} lng={-122.07}>
          <PinElement scale={1.5} />
        </AdvancedMarker>
        <AdvancedMarker lat={37.38} lng={-122.07}>
          <PinElement background='#FBBC04' />
        </AdvancedMarker>
        <AdvancedMarker lat={37.4} lng={-122.05}>
          <PinElement borderColor={'#137333'} />
        </AdvancedMarker>
        <AdvancedMarker lat={37.38} lng={-122.05}>
          <PinElement glyphColor={'white'} />
        </AdvancedMarker>
        <AdvancedMarker lat={37.4} lng={-122.03}>
          <PinElement glyph='' />
        </AdvancedMarker>
        <AdvancedMarker lat={37.38} lng={-122.03}>
          <img src='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' />
        </AdvancedMarker>
        <AdvancedMarker lat={37.4} lng={-122.01}>
          <PinElement>
            <p className='bg-black text-white whitespace-nowrap'>Home</p>
          </PinElement>
        </AdvancedMarker>
        <AdvancedMarker lat={37.39} lng={-122.05} gmpDraggable>
          <div className='px-5 py-3 rounded bg-[#0af] text-lg text-white'>whole new marker content.</div>
        </AdvancedMarker>
      </GoogleMap>
    </Container>
  );
}
