import '../Explore.css'
import Map from './Map';

// import 'mapbox-gl/dist/mapbox-gl.css';
 
// let apiKey = 'pk.eyJ1Ijoia2hhbGlhcDI2IiwiYSI6ImNsMzd1YzIwYjNuanozZG81Y3g5N3Y5ZWcifQ.vNMICCpCjPcoSz5fqstmJA'

function Explore(){

    return(
        <div>
            <div className='container'>
            <form>
 
    <input type="text" placeholder='search a station ' name="name" />
 
  <input type="submit" value="Submit" />
</form>

           
<Map/>      
</div>
        </div>
    ) 
}
export default Explore