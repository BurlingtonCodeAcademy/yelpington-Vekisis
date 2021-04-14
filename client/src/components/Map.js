//imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

export default function Map(props) {
  const center = [44.4761601, -73.212906];
  return (
    <div id="map-container">
      <MapContainer
        id="map"
        center={center}
        zoom={15}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        zoomControl={true}
        touchZoom={false}
        style={{ height: "600px", width: "600px" }}
      >
        <TileLayer
          url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
        <Marker position={[44.475815, -73.21278]}>
          <Popup>
            <p>Ahli Babas Kabobs</p>
          </Popup>
        </Marker>
        <Marker position={[44.476627, -73.214215]}>
          <Popup>
            <p>American Flatbread</p>
          </Popup>
        </Marker>
        <Marker position={[44.475444, -73.217157]}>
          <Popup>
            <p>August First</p>
          </Popup>
        </Marker>
        <Marker position={[44.477966, -73.210634]}>
          <Popup>
            <p>City Market</p>
          </Popup>
        </Marker>
        <Marker position={[44.478186, -73.212028]}>
          <Popup>
            <p>El Cortijo Taqueria</p>
          </Popup>
        </Marker>
        <Marker position={[44.478244, -73.213256]}>
          <Popup>
            <p>Farmhouse Tap and Grill</p>
          </Popup>
        </Marker>
        <Marker position={[44.476387, -73.21247]}>
          <Popup>
            <p>Gaku Ramen</p>
          </Popup>
        </Marker>
        <Marker position={[44.479143, -73.217483]}>
          <Popup>
            <p>Hen of The Wood</p>
          </Popup>
        </Marker>
        <Marker position={[44.478148, -73.213526]}>
          <Popup>
            <p>Henry's Diner</p>
          </Popup>
        </Marker>
        <Marker position={[44.476076, -73.212408]}>
          <Popup>
            <p>Honey Road</p>
          </Popup>
        </Marker>
        <Marker position={[44.475881, -73.212944]}>
          <Popup>
            <p>Kountry Kart Deli</p>
          </Popup>
        </Marker>
        <Marker position={[44.477116, -73.212767]}>
          <Popup>
            <p>Leunig's Bistro</p>
          </Popup>
        </Marker>
        <Marker position={[44.476029, -73.211172]}>
          <Popup>
            <p>Mr. Mike's</p>
          </Popup>
        </Marker>
        <Marker position={[44.478144, -73.212756]}>
          <Popup>
            <p>Pascolo Ristorante</p>
          </Popup>
        </Marker>
        <Marker position={[44.476862, -73.212622]}>
          <Popup>
            <p>Ri Ras Irish Pub</p>
          </Popup>
        </Marker>
        <Marker position={[44.478098, -73.214574]}>
          <Popup>
            <p>A Single Pebble</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
