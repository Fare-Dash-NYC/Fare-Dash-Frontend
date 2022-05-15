import '../Explore.css'


import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
 
function Map(){
return (
   <div>
       <GoogleMap defaultZoom={10} defaultCenter={{lat:40.712776, lng:-74.005974}}/>

     
   </div> 
)
}

const WrappedMap =  withScriptjs(withGoogleMap(Map))


function Explore(){


    return(
        <div>
<div  className="container">
<form className='station-form'>

    <input type="text" placeholder="enter station"  name="station-search" />

  <input type="submit" value="Submit" />
</form>
<div  style={ {width:"50vw", height:"50vh"}}>
<WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyApM3A-NU978wDAK0rycmrQwev-Jl5gB8o'
} 
loadingElement={<div style={{height:"100%"}}/>}
containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}

/>
</div>


    </div>       
        </div>
    )
}
export default Explore