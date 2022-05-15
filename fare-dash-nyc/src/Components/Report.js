import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FormGroup, Label, Input,
    Button, Form
} from 'reactstrap';
import "../Styles/index.css"
  
function Report() {
  
    return (
        <div className="form">
        
      <Form>
    <h1> Make A Report</h1>

        <FormGroup>
          <Label for="exampleSelect">Select Station</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>


        <FormGroup>
          <Label for="exampleSelectMulti">Select Borough</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>Queens</option>
            <option>Brooklyn</option>
            <option>Manhattan</option>
            <option>Staten Island</option>
            <option>Bronx</option>
          </Input>
        </FormGroup>


        <FormGroup>
          <Label for="exampleText">Add more details</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>


        <FormGroup>
          <Label for="exampleFile">Upload A File</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Select Option</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Hapening Now
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Resolved
            </Label>
          </FormGroup>
        </FormGroup>
        
        <Button>Submit Report</Button>
                
     </Form>
   </div >
    );
}
  
export default Report;