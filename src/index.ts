import {
  Control,
  Marker,
  Polyline,
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
  PolylineProps,
  CustomMarkerProps,
  InfoWindowProps,
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
import { appendLibImportScript } from './utils/appendScript';

export {
  Control,
  Marker,
  Polyline,
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
  appendLibImportScript,
};

export type {
  ControlProps,
  MarkerProps,
  PolylineProps,
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
  Polyline,
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
  appendLibImportScript,
};
