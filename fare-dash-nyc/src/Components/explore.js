import '../Explore.css'
import Map from './Map';

// import 'mapbox-gl/dist/mapbox-gl.css';
 
// let apiKey = 'pk.eyJ1Ijoia2hhbGlhcDI2IiwiYSI6ImNsMzd1YzIwYjNuanozZG81Y3g5N3Y5ZWcifQ.vNMICCpCjPcoSz5fqstmJA'

function Explore(){

    return(
        <div>
            <div className='container'>
                <div className='report-container'>
            {/* <form>
 
    <input className='report-input' type="text" placeholder='search a station ' name="name" />
</form> */}
<div className='reports'>
    <h5>Undercover Police</h5>
    <p><b>34th St Station </b></p>
    <p>Police spotted near NW exit, wearing a white cap</p>
</div>

<div className='reports'>
    <h5>Undercover Police</h5>
    <p><b>34th St Station </b></p>
    <p>Police spotted near NW exit, wearing a white cap</p>
</div>

</div>
           
<Map/>      
</div>
        </div>
    ) 
}
export default Explore