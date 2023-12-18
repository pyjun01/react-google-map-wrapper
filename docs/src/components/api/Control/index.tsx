import { Control, CustomMarker, GoogleMap, useMapContext } from 'react-google-map-wrapper';

import { Container } from '../../Container';
import { ControlButton } from '../../ControlButton';

const center = { lat: 37.5111158, lng: 127.098167 };

function MapContent() {
  const map = useMapContext();

  const handleButtonClick = () => {
    map.setCenter(center);
  };

  return (
    <Control className='m-[10px]' position={google.maps.ControlPosition.TOP_CENTER}>
      <ControlButton onClick={handleButtonClick}>Center Map</ControlButton>
    </Control>
  );
}

export function ControlEx() {
  return (
    <Container>
      <GoogleMap className='h-[400px]' zoom={12} center={center}>
        <MapContent />
      </GoogleMap>
    </Container>
  );
}
