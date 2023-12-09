import { Suspense, type ReactNode } from 'react';

import { GoogleMapApiLoader } from 'react-google-map-wrapper';

import { Fallback } from './Fallback';

export function Container({ children }: { children?: ReactNode }) {
  return (
    <div className='not-content pt-6'>
      <Suspense fallback={<Fallback />}>
        <GoogleMapApiLoader apiKey='AIzaSyCLIlFswvMTqIA0RzXf6d9aFw4CIBRjrV4' suspense>
          {children}
        </GoogleMapApiLoader>
      </Suspense>
    </div>
  );
}
