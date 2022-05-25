// import { height, style } from '@mui/system'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ModalButton from "./ModalButton";
import SubwayStations from "../SubwayStations";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import '../Map.css'





function Map2() {
  const train = new Icon({
    iconUrl:
    "https://img.icons8.com/ios-glyphs/30/000000/train.png",
    iconSize: [25, 25],
  });
  const position = [40.678177, -73.94416];



 

  return (
    <MapContainer
      className="map"
      center={position}
      zoom={13}

      style={{ height: 700, width: "100%" , zIndex: 0}}
    >
      {/* mapbox://styles/khaliap26/cl3ja66zi003g16oxici6xh35 */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/khaliap26/cl3ja66zi003g16oxici6xh35/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2hhbGlhcDI2IiwiYSI6ImNsMzd1YTl5aDB0NWgzZm9iOGF3YTdtaHAifQ.DrmUh3aSATfRZ3YcIE12zA"
      />
      {SubwayStations.map((stations) => (
        <Marker
          position={[
            stations.the_geom.coordinates[1],
            stations.the_geom.coordinates[0],
          ]}
          icon={train}
        >
          <Popup>
            <h6>{stations.name}</h6>
            <p>{stations.line}</p>
            <ModalButton stationName={stations.name} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map2;
