import {
  Control,
  Marker,
  CustomMarker,
  InfoWindow,
  GoogleMap,
  GoogleMapApiLoader,
  useMapContext,
  useMarkerContext,
  useCustomMarkerContext,
} from './components';
import type {
  ControlProps,
  MarkerProps,
  InfoWindowProps,
  CustomMarkerProps,
  GoogleMapProps,
  GoogleMapApiLoaderProps,
  MapEvent,
  MarkerEvent,
  InfoWindowEvent,
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
  InfoWindow,
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
  InfoWindowProps,
  CustomMarkerProps,
  GoogleMapProps,
  GoogleMapApiLoaderProps,
  MapEvent,
  MarkerEvent,
  InfoWindowEvent,
  OverlayMarker,
  ApiLoadConfig,
  LibraryMap,
  LibraryName,
};

export default {
  Control,
  Marker,
  CustomMarker,
  InfoWindow,
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
