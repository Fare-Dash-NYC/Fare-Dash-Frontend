import { useEffect, useState } from "react";
import "../Explore.css";
import Map2 from "./Map2";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RenderReports from "./RenderReports";

const url = "http://localhost:8081/reports";

function Explore() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="reports">
          <h2>Search station reports</h2>
          {reports.map((report) => {
            return (
                <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
        {report.station_name}
        </Typography>
        <Typography variant="body2">
          {report.incident}
          <br />
          {report.more_details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
              );
          })}
        </div>
        <Map2 />
      </div>
    </div>
  );
}
export default Explore;
