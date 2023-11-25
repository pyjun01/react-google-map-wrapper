# react-google-map

Google map react componentize project

## TO DO

- [x] GoogleMapApiLoader
- [x] GoogleMap
- [x] Marker
- [x] Custom Marker
- [x] Controls
- [ ] Polyline
- [ ] Polygon
- [ ] Rectangle
- [ ] Circle
- [ ] AdvancedMarkerView
- [ ] InfoWindow
- [ ] MarkerClusterer
- [ ] HeatmapLayer

## DEMO

[Demo Link](https://pyjun01.github.io/react-google-map)

```tsx
function App() {
  const [lat, setLat] = useState(32);
  const [lng, setLng] = useState(127.0038);
  const [draggable, setDraggable] = useState(true);

  return (
    <div>
      <Suspense fallback='loading google map api'>
        <GoogleMapApiLoader apiKey={...} suspense>
          <GoogleMap
            center={{
                lat: 37.3752,
                lng: 127.0038
            }}
            zoom={4}
            style={{
                height: '600px'
            }}
          >
            <CustomMarker
              lat={lat}
              lng={lng}
              onDrag={({ lat, lng }) => {
                setLat(lat);
                setLng(lng);
              }}
              draggable={draggable}
            >
              <div onClick={console.log}>
                Hello, Draggable! ({lat}, {lng})
                <button onClick={() => setLng(130)}>Set lng</button>
                <button onClick={() => setDraggable(!draggable)}>toggle draggable</button>
              </div>
            </CustomMarker>
            <Marker lat={20} lng={127.0038} title='Test' draggable />
          </GoogleMap>
        </GoogleMapApiLoader>
      </Suspense>
    </div>
  );
}
```
