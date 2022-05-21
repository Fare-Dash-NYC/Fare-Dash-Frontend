// import { height, style } from '@mui/system'
import {MapContainer,
    TileLayer,
    Marker,
Popup} from 'react-leaflet'
import ModalButton from './ModalButton';
import SubwayStations from '../SubwayStations';
import 'leaflet/dist/leaflet.css'; 
import { Icon } from 'leaflet';
import { useState } from 'react';





function Map2 (){
  



const train = new Icon({
    iconUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Toulouse_%22Train%22_symbol.svg/2048px-Toulouse_%22Train%22_symbol.svg.png',
    iconSize: [25,25]
})
const position = [40.678177,-73.944160]
 return (

    <MapContainer className="map"
    center={position}
    zoom={13}
    style={{height:700, width: "100%"}}>
          <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://api.mapbox.com/styles/v1/khaliap26/cl396o0at003p15o5o4umrrdd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2hhbGlhcDI2IiwiYSI6ImNsMzd1YTl5aDB0NWgzZm9iOGF3YTdtaHAifQ.DrmUh3aSATfRZ3YcIE12zA"
    
  />
 {SubwayStations.map(stations => (
     
       
       

 <Marker position={[stations.the_geom.coordinates[1],
            stations.the_geom.coordinates[0]]}icon={train}>
                
    <Popup >
      <h6>{stations.name}</h6>
      <p>{stations.line}</p>   
      
    <ModalButton stationName= {stations.name}/>
  
    </Popup>

 
  </Marker> 
 ))}

    </MapContainer>
 )


}

export default Map2;