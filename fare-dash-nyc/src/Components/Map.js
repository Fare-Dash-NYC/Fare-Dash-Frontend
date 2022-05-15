 import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
 
 function Map(){
return (
    <div>
        <GoogleMap defaultZoom={10} defaultCenter={{lat:40.712776, lng:-74.005974}}/>

      
    </div> 
)
 }

const wrappedMap =  withScriptjs(withGoogleMap(Map))



 export default wrappedMap