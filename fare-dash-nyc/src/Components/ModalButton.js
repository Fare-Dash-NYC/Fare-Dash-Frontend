import {Link} from "react-router-dom"
import Report from "./Report"


function ModalButton(props){
    const {stationName} = props
    return (
        <div>
            <Link to={`/report?name=${stationName}`}>
             <button > Make a report at this station</button>
             </Link>
             {/* <Report style= {{display: 'none'}} /> */}
        </div>


    )


}


export default ModalButton;