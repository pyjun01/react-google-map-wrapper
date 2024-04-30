# [React Google Map Wrapper](https://pyjun01.github.io/react-google-map-wrapper/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pyjun01/react-google-map-wrapper/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react-google-map-wrapper.svg?style=flat)](https://www.npmjs.com/package/react-google-map-wrapper)

`react-google-map-wrapper` is a React component library for rendering Google Maps.

You can see an example [here](https://pyjun01.github.io/react-google-map-wrapper/docs/examples/basic/).

```tsx
import { Suspense } from 'react';
import { GoogleMap, GoogleMapApiLoader, Marker } from 'react-google-map-wrapper';

function Map() {
  return (
    <GoogleMap className='h-[400px]' zoom={17} center={{ lat: 37.5709413, lng: 126.977787 }}>
      <Marker lat={37.5709413} lng={126.977787} />
    </GoogleMap>
  );
}

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      {/* Load the google map api */}
      <GoogleMapApiLoader apiKey='YOUR_API_KEY' suspense>
        <Map />
      </GoogleMapApiLoader>
    </Suspense>
  );
}
```

## Installation

```bash
npm install react-google-map-wrapper # or yarn add react-google-map-wrapper or pnpm add react-google-map-wrapper
```

## Documentation

You can find the documentation [on the website.](https://pyjun01.github.io/react-google-map-wrapper)

Check out the [Getting Started](https://pyjun01.github.io/react-google-map-wrapper/docs/introdution/) page for a quick overview.

### License

`react-google-map-wrapper` is [MIT licensed](https://github.com/pyjun01/react-google-map-wrapper/blob/main/LICENSE).
