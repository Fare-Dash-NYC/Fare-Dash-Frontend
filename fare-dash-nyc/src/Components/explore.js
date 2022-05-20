import '../Explore.css'
import Map from './Map';

// import 'mapbox-gl/dist/mapbox-gl.css';
 
// let apiKey = 'pk.eyJ1Ijoia2hhbGlhcDI2IiwiYSI6ImNsMzd1YzIwYjNuanozZG81Y3g5N3Y5ZWcifQ.vNMICCpCjPcoSz5fqstmJA'

function Explore(){

    return(
        <div>
            <div className='container'>
                <div className='reports'>
                
       <h2>Search station reports</h2>
       <ul>
           <li>
               <h4> Station Name</h4>
               <h6>Incident</h6>
               <p>More details</p>
        
           </li>
       </ul>
</div>




           
<Map/>      
</div>
        </div>
    ) 
}
export default Explore