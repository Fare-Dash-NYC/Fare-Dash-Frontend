import { useEffect, useState } from "react";
import "../Explore.css";
import Map2 from "./Map2";
import * as React from "react";
import { DateTime } from "luxon";

const url = "http://localhost:8081/reports";

function Explore() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div className="container">
        <Map2 />
        <div className="reports">
          <h2 className="search-reports">Recent Reports</h2>
          {reports.map((report) => {
            return (
              <ul>
              <li className="report-card">
                <p>{DateTime.fromISO(report.timestamp).toRelative()}</p>
                <h4>{report.station_name} <i class="fa-solid fa-train-subway" style={{color: "grey"}}></i></h4>
                <h6>{report.incident}</h6>
                <p>{report.more_details}</p>
              </li>
            </ul>
              );
          })}
        </div>
      </div>
    
  );
}
export default Explore;
