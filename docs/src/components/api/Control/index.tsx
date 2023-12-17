import { Control, CustomMarker, GoogleMap, useMapContext } from "react-google-map-wrapper";

import { Container } from "../../Container";

const center = { lat: 37.5111158, lng: 127.098167 };

function MapContent() {
  const map = useMapContext();

  const handleButtonClick = () => {
    map.setCenter(center);
  }

  return (
    <Control position={google.maps.ControlPosition.TOP_CENTER}>
      <button style={{
        backgroundColor: '#fff',
        border: '2px solid #fff',
        borderRadius: '3px',
        boxShadow: '0 2px 6px rgba(0,0,0,.3)',
        color: 'rgb(25,25,25)',
        cursor: 'pointer',
        fontFamily: 'Roboto,Arial,sans-serif',
        fontSize: '16px',
        lineHeight: '38px',
        margin: '8px 0 22px',
        padding: '0 5px',
        textAlign: 'center',
      }} onClick={handleButtonClick}>Center Map</button>
    </Control>
  );
}

export function ControlEx() {
  return (
    <Container>
      <GoogleMap
        className='h-[400px]'
        zoom={12}
        center={center}
      >
        <MapContent />
      </GoogleMap>
    </Container>
  )
}
