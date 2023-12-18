import { GoogleMap, Circle } from "react-google-map-wrapper";

import { Container } from "../../Container";

const cityList = [
  {
    name: 'chicago',
    center: { lat: 41.878, lng: -87.629 },
    population: 2714856,
  },
  {
    name: 'newyork',
    center: { lat: 40.714, lng: -74.005 },
    population: 8405837,
  },
  {
    name: 'losangeles',
    center: { lat: 34.052, lng: -118.243 },
    population: 3857799,
  },
   {
    name: 'vancouver',
    center: { lat: 49.25, lng: -123.1 },
    population: 603502,
  },
];

export function CircleEx() {
  return (
    <Container>
      <GoogleMap
        className='h-[400px]'
        initialZoom={4}
        initialCenter={{ lat: 37.09, lng: -95.712 }}
        mapOptions={{
          mapTypeId: "terrain",
        }}
      >
        {cityList.map(({ name, center, population }) => (
          <Circle
            key={name}
            strokeColor="#FF0000"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#FF0000"
            fillOpacity={0.35}
            center={center}
            radius={Math.sqrt(population) * 100}
          />
        ))}
      </GoogleMap>
    </Container>
  );
}
