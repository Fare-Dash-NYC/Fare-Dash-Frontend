import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import Map2 from "./Map2";


const url = "http://localhost:8081/reports";
function useQuery() {
  const { search } = useLocation();

  return new URLSearchParams((search), [search]);
}

function Report() {
  let query =  useQuery()

  const navigate = useNavigate();

  
  const [reportForm, setReportForm] = useState({
    station: query.get("name"),
    reportType: "",
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
    <div className="form">
      <Form onSubmit={handleReportForm}>
        <h1> Make A Report</h1>

        <FormGroup>
          <Label for="exampleSelect">Station</Label>
          <Input
            placeholder="Station to make a report"
            value={reportForm.station}
            onChange={handleReportFormChange}
            type="text"
            name="station"
            id="exampleSelect"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select report type </Label>
          <Input
            onChange={handleReportFormChange}
            type="select"
            name="reportType"
            id="exampleSelect"
          >
            <option>Undercover police Spotted</option>
            <option>Police Officer Hiding</option>
            <option>Mulitple Police Officers Spotted</option>
            <option>1-4 police Officers Spotted</option>
            <option>Other</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Add more details</Label>
          <Input
            onChange={handleReportFormChange}
            type="textarea"
            placeholder="Add more deatils to your report Ex. Police hiding in the NW exit"
            name="details"
            id="exampleText"
          />
        </FormGroup>

        <Button>Submit Report</Button>
      </Form>
    </div>
  );
}

export default Report;
