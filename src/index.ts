import {
  Control,
  Marker,
  CustomMarker,
  GoogleMap,
  GoogleMapApiLoader,
  useMapContext,
  useMarkerContext,
  useCustomMarkerContext,
} from './components';
import type {
  ControlProps,
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
  Control,
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
  ControlProps,
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
  Control,
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
