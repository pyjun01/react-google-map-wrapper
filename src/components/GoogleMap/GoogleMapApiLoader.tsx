import { PropsWithChildren, useEffect } from 'react';

import { LoadingStatus, coreStore, useCoreStore } from '../../store/core';
import { ApiLoadConfig } from '../../types';
import { appendLibImportScriptOnce } from '../../utils/appendScript';

export interface GoogleMapApiLoaderProps
  extends PropsWithChildren<ApiLoadConfig> {
  suspense?: unknown;
  onSuccess?: (core: google.maps.CoreLibrary) => void;
  onFailure?: (reason: unknown) => void;
}

let promise: Promise<unknown> | null = null;

export function GoogleMapApiLoader({
  children,
  suspense,
  onSuccess,
  onFailure,
  ...apiLoadConfig
}: GoogleMapApiLoaderProps) {
  appendLibImportScriptOnce(apiLoadConfig);

  const status = useCoreStore((state) => state.status);

  const importCoreLibrary = () =>
    promise ||
    (promise = google.maps
      .importLibrary('core')
      .then((core) => {
        coreStore.setState({
          status: LoadingStatus.SUCCESS,
          core: core as google.maps.CoreLibrary,
        });

        onSuccess?.(core as google.maps.CoreLibrary);
      })
      .catch((reason) => {
        console.error(reason);
        coreStore.setState({ status: LoadingStatus.FAILURE });

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
