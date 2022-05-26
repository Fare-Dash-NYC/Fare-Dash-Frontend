import "../HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import {image1, image2, image3} from './Images/Hompepage.js'
import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Carousel } from "react-bootstrap";
import "./color.png";

function HomePage() {
  return (
    <div className="main-container">
      <div className="top-container">
        <div className="carousel"></div>

        {/* <img className='bg-img'  alt="" src='https://assets.teenvogue.com/photos/5de958477c5a7e0008756457/3:2/w_4392,h_2928,c_limit/GettyImages-462477089.jpg'/> */}
        <div className="top-home">
          <div className="mission-text">
            <h1>WHERE PEOPLE HELP EACH OTHER</h1>
            <p>
              We believe in sharing information in real time for the good of the
              public. Through our app, we hope to keep our community informed of
              police presence in train stations.
            </p>
            <div style={{ marginTop: "70px" }}>
              <Link to={"/explore"}>
                <button>View Live Reports</button>
              </Link>
            </div>
          </div>
          <div className="mission-img">
            <img className="img2" src={require("./Rectangle.png")} />
            <img
              className="img"
              src="https://cdn.vox-cdn.com/thumbor/5B0tpGiowq2KI9tHw4p4QRFIrRA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/66075646/akrales_190528_3453_0099.0.jpg"
            />
          </div>
        </div>
      </div>
      <div className="container-home">
        <div className="facts-container">
          <div className="gif">
            <img
              style={{ width: "200px", height: "200px", marginRight: "400px" }}
              alt=""
              src="https://media.giphy.com/media/Q2JRHHzmMw4SSFk0dv/giphy.gif"
            />
            {/* <iframe src="https://giphy.com/embed/Q2JRHHzmMw4SSFk0dv" width="600" height="200" frameBorder="0"  allowFullScreen></iframe> */}
            <div>
              <p>
              New Yorkers of colors are constantly under the threat of police harassment and brutality in our subway systems. 
              According to the Gotham Gazette 92% of the 481 fare evasion arrests in the fourth quarter of 2021 were of non-white riders; 
              60 % were black. 
              </p>
            </div>
          </div>

          <div className="gif" style={{ marginTop: "150px" }}>
            <p>
            Fare evasion is a criminal offense. If convicted, 
            you may get a criminal record and pay a fine of up to $100. 
            </p>
            <div>
              <img
                alt=""
                style={{ width: "250px", height: "250px", marginLeft: "300px" }}
                src="https://media.giphy.com/media/fAEj9oqG6iwApdz0jg/giphy.gif"
              />
            </div>
          </div>
          <div className="gif" style={{ marginTop: "200px" }}>
            <img
              alt=""
              style={{ width: "200px", height: "200px", marginRight: "400px" }}
              src="https://media.giphy.com/media/KenqZPDgaBS8fDZiOx/giphy.gif"
            />

            <div>
              <p>
              With fare dash, commuters from black and brown communities are able to stay alert of police presence in train stations 
              and keep themselves safe from stop and frisk, and high fines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
