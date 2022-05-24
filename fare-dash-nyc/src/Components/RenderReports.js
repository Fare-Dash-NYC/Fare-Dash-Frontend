import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function RenderReports({reports}) {

  return (
    <ul>
        <li>hello</li>
      <li>
        <h4>{reports.station_name} </h4>
        <h6>{reports.incident}</h6>
        <p>{reports.more_details}</p>
      </li>
    </ul>
  );
}

export default RenderReports;
