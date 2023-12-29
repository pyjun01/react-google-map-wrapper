import { PropsWithChildren, useEffect } from 'react';

import { LoadingStatus, setLoadingStatus, useApiLoadingStatus } from '../../store/core';
import { ApiLoadConfig } from '../../types';
import { appendLibImportScript } from '../../utils/appendScript';

export interface GoogleMapApiLoaderProps extends PropsWithChildren<ApiLoadConfig> {
  suspense?: boolean;
  onSuccess?: (core: google.maps.CoreLibrary) => void;
  onFailure?: (reason: unknown) => void;
}

let promise: Promise<unknown> | null = null;

export function GoogleMapApiLoader({ children, suspense, onSuccess, onFailure, ...apiLoadConfig }: GoogleMapApiLoaderProps) {
  appendLibImportScript(apiLoadConfig);

  const status = useApiLoadingStatus();

  const importCoreLibrary = () =>
    promise ||
    (promise = google.maps
      .importLibrary('core')
      .then((core) => {
        setLoadingStatus(LoadingStatus.SUCCESS);

        onSuccess?.(core as google.maps.CoreLibrary);
      })
      .catch((reason) => {
        console.error(reason);
        setLoadingStatus(LoadingStatus.FAILURE);

        onFailure?.(reason);
      }));

  useEffect(() => {
    if (suspense) {
      return;
    }

    importCoreLibrary();
  }, []);

  if (suspense && status === LoadingStatus.LOADING) {
    throw importCoreLibrary();
  }

  return <>{children}</>;
}
