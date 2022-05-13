import '../Explore.css'

function Explore(){


    return(
        <div>
<div className="container">
<form className='station-form'>

    <input type="text" placeholder="enter station"  name="station-search" />

  <input type="submit" value="Submit" />
</form>
<div>
<iframe src="https://www.google.com/maps/d/embed?mid=1eMniSqtkyCteg8doEmPUrhE28x0&ehbc=2E312F" width="640" height="480"></iframe>
</div>


    </div>       
        </div>
    )
}
export default Explore