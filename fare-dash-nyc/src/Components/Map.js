import React, {  useState, useEffect, useRef } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '../Map.css'





mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhbGlhcDI2IiwiYSI6ImNsMzd1YzIwYjNuanozZG81Y3g5N3Y5ZWcifQ.vNMICCpCjPcoSz5fqstmJA';

function Map(){
 

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-73.944160);
    const [lat, setLat] = useState(40.678177);
    const [zoom, setZoom] = useState(13);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/khaliap26/cl396o0at003p15o5o4umrrdd',
          center: [lng, lat],
          zoom: zoom
        });
      //   new mapboxgl.Marker({color: "#FFFFFF",
      // draggable: true
      // })
      // .setLngLat([ -73.98676800153976, 40.75461199851542])
      // .addTo(map);
      
      });

      useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        }); 
       
      });

     
 
      
   
return (
    <div>
     

      <div ref={mapContainer} className="map-container" />
     
    </div>
)
}  


export default Map;