import {Link} from "react-router-dom"
import Report from "./Report"


function ModalButton(props){
    const {stationName} = props
    console.log(stationName)
    return (
        <div>
            <Link to={'/report'}>
             <button > Make a report at this station</button>
             </Link>
             {/* <Report style= {{display: 'none'}} /> */}
        </div>


    )


}


export default ModalButton;