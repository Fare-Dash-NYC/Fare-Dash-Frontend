import '../Explore.css'
import Map from './Map';
import Map2 from './Map2';
// import RenderReports from './RenderReports';
// import 'mapbox-gl/dist/mapbox-gl.css';
 
// let apiKey = 'pk.eyJ1Ijoia2hhbGlhcDI2IiwiYSI6ImNsMzd1YzIwYjNuanozZG81Y3g5N3Y5ZWcifQ.vNMICCpCjPcoSz5fqstmJA'

function Explore(){

    return(
        <div>
            <div className='container'>
                <div className='reports'>
                
       <h2>Search station reports</h2>
       {/* <RenderReports/> */}
      
</div>

<Map2/>


           
{/* <Map/>       */}
</div>
        </div>
    ) 
}
export default Explore