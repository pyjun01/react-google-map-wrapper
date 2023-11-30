export type LibraryName =
  | 'core'
  | 'maps'
  | 'places'
  | 'geocoding'
  | 'routes'
  | 'marker'
  | 'geometry'
  | 'elevation'
  | 'streetView'
  | 'journeySharing'
  | 'drawing'
  | 'visualization';

export interface LibraryMap {
  core: google.maps.CoreLibrary;
  maps: google.maps.MapsLibrary;
  places: google.maps.PlacesLibrary;
  geocoding: google.maps.GeocodingLibrary;
  routes: google.maps.RoutesLibrary;
  marker: google.maps.MarkerLibrary;
  geometry: google.maps.GeometryLibrary;
  elevation: google.maps.ElevationLibrary;
  streetView: google.maps.StreetViewLibrary;
  journeySharing: google.maps.JourneySharingLibrary;
  drawing: google.maps.DrawingLibrary;
  visualization: google.maps.VisualizationLibrary;
}

export interface ApiLoadConfig {
  /**
   * API key
   * https://developers.google.com/maps/documentation/javascript/get-api-key
   */
  apiKey: string;
  /**
   * Maps JavaScript API version
   * default type: "weekly"
   * https://developers.google.com/maps/documentation/javascript/versions#release-channels-and-version-numbers
   */
  v?: 'weekly' | 'quarterly' | 'beta' | 'alpha' | `${number}.${number}`;
  /**
   * additional Maps JavaScript API libraries to load. it is not generally recommended, but is available for developers who wish to finely tune the caching behavior on their website.
   * https://developers.google.com/maps/documentation/javascript/libraries#libraries-for-bootstrap-url-legacy
   */
  libraries?: LibraryName | LibraryName[];
  /**
   * The language to use.
   * https://developers.google.com/maps/faq#languagesupport
   */
  language?: string;
  /**
   * The region code to use.
   * https://developers.google.com/maps/documentation/javascript/localization#Region
   */
  region?: string;
  authReferrerPolicy?: string;
}
