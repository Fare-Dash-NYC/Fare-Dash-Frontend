import { useEffect, useState } from "react";
import "../Explore.css";
import Map2 from "./Map2";
import * as React from "react";
import { DateTime } from "luxon";
import LikeBtn from './LikeBtn';
import { GiPoliceOfficerHead } from "react-icons/gi";

const url = "http://localhost:8081/reports";

function Explore({isAuthenticated}) {
  const [reports, setReports] = useState([]);
  const [allReports, setAllReports] = useState([]);


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setReports(data));

      fetch("http://localhost:8081/all-reports")
      .then((response) => response.json())
      .then((data) => setAllReports(data));
  }, []);

  return (
    <div className="container">
      <div className="top-container">
        <Map2 className="map2" reports={allReports} isAuthenticated={isAuthenticated} />
      <div className="reports">
        <h2 className="search-reports">Recent Reports</h2>
        {reports.map((report) => {
          return (
            <ul className="reports-ul">
              <li className="report-card">
                <p className="time">
                  {DateTime.fromISO(report.timestamp).toRelative()}
                </p>
                <h4 className="name">
                  {report.station_name}{" "}
                  <i
                    class="fa-solid fa-train-subway"
                    style={{ color: "grey" }}
                  ></i>
                </h4>
                <h6 className="incident">{report.incident}{" "}<GiPoliceOfficerHead/></h6>
                <p className="details">{report.more_details}</p>
                {isAuthenticated ? <LikeBtn/> : null}
              </li>
            </ul>
          );
        })}
      </div>
      </div>
      <div className="bottom-container">
        <h2 className="search-reports">All Reports</h2>
        {allReports.map((report) => {
          return (
            <ul className="reports-ul">
              <li className="report-card-2">
                <p className="time">
                  {DateTime.fromISO(report.timestamp).toRelative()}
                </p>
                <h4 className="name">
                  {report.station_name}{" "}
                  <i
                    class="fa-solid fa-train-subway"
                    style={{ color: "grey" }}
                  ></i>
                </h4>
                <h6 className="incident">{report.incident}{" "}<GiPoliceOfficerHead/></h6>
                <p className="details">{report.more_details}</p>
                {isAuthenticated ? <LikeBtn/> : null}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
export default Explore;
