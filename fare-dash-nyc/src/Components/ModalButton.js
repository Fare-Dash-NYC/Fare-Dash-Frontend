import {Link} from "react-router-dom"

import {Button,Modal, Form} from 'react-bootstrap'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from "react-router-dom";


const url = "http://localhost:8081/reports";
function useQuery() {
  const { search } = useLocation();

  return new URLSearchParams((search), [search]);
}



function ModalButton(props){
    const {stationName} = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let query =  useQuery()

  const navigate = useNavigate();

  
  const [reportForm, setReportForm] = useState({
    station: query.get("name"),
    reportType: "Undercover police Spotted",
    details: "",
  });
  const handleReportFormChange = (event) => {
    event.preventDefault();
    setReportForm({
      ...reportForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleReportForm = async (event) => {
    event.preventDefault();
    console.log()
    // if(reportForm.reportType = ""){
    //   setReportForm.reportType
    // }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(reportForm),
    });
    navigate("/explore", { replace: true });
  };



    return (
        <div>
            {/* <Link to={`/report?name=${stationName}`}>  */}
             <button onClick={handleShow}> Make a report at this station</button>
          
              {/* </Link>  */}
              <Modal style={{backgroundColor:'transparent'}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleReportForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Station</Form.Label>
              <Form.Control
                placeholder="Station to make a report"
                value={stationName}
                onChange={handleReportFormChange}
                type="text"
                name="station"
                id="exampleSelect"
              />
            </Form.Group>
            <Form.Label>Report type</Form.Label>
            <Form.Select aria-label="Default select example"
             onChange={handleReportFormChange}
             // value="Undercover police Spotted"
             type="select"
             name="reportType"
             id="exampleSelect"
            
            >
 <option>Undercover police Spotted</option>
            <option>Police Officer Hiding</option>
            <option>Mulitple Police Officers Spotted</option>
            <option>1-4 police Officers Spotted</option>
            <option>Other</option>
</Form.Select>
<Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>More Deatails</Form.Label>
              <Form.Control as="textarea" rows={3} 
                onChange={handleReportFormChange}
                type="textarea"
                placeholder="Add more deatils to your report Ex. Police hiding in the NW exit"
                name="details"
                id="exampleText"
              
              />
            </Form.Group>

            <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Make report
          </Button>
          </Form>
        </Modal.Body>
        
      </Modal>


             {/* <Report style= {{display: 'none'}} /> */}
        </div>


    )


}


export default ModalButton;