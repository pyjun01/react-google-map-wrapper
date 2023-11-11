import {
  Marker,
  CustomMarker,
  GoogleMap,
  GoogleMapApiLoader,
  useMapContext,
  useMarkerContext,
  useCustomMarkerContext,
} from './components';
import type {
  MarkerProps,
  CustomMarkerProps,
  GoogleMapProps,
  GoogleMapApiLoaderProps,
  MapEvent,
  MarkerEvent,
  OverlayMarker,
} from './components';

import { useImportLibrary } from './hooks/useImportLibrary';
import { LoadingStatus, useApiLoadingStatus } from './store/core';
import { ApiLoadConfig, LibraryMap, LibraryName } from './types';
import { appendLibImportScriptOnce } from './utils/appendScript';

export {
  Marker,
  CustomMarker,
  GoogleMap,
  GoogleMapApiLoader,
  useMapContext,
  useMarkerContext,
  useCustomMarkerContext,
  useImportLibrary,
  LoadingStatus,
  useApiLoadingStatus,
  appendLibImportScriptOnce,
};

export type {
  MarkerProps,
  CustomMarkerProps,
  GoogleMapProps,
  GoogleMapApiLoaderProps,
  MapEvent,
  MarkerEvent,
  OverlayMarker,
  ApiLoadConfig,
  LibraryMap,
  LibraryName,
};

export default {
  Marker,
  CustomMarker,
  GoogleMap,
  GoogleMapApiLoader,
  useMapContext,
  useMarkerContext,
  useCustomMarkerContext,
  useImportLibrary,
  LoadingStatus,
  useApiLoadingStatus,
  appendLibImportScriptOnce,
};
