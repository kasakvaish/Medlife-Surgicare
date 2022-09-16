import "./stellardoc.css";
import React from "react";
import img1 from "./Pic/IMAGEdoc1.png";
import img2 from "./Pic/IMAGEdoc2.png";
import img3 from "./Pic/IMAGEdoc3.png";
import img4 from "./Pic/IMAGEdoc4.png";

function StellerDoc() {
  return (
    <div className="box">
      <h1 className="head-3">Our Stellar Doctors</h1>
      <div className="box-2">
        <div className="box-container">
          <img
            src={img1}
            className="doctor-1 doc"
            height="250px"
            width="230px"
            alt=""
          />
          <div className="doc-overlay">
            <div className="doc-content">
              <h6 className="head-4">Dr. S.K. Gupta</h6>
              <p className="doc-occupatoin">General Surgeon</p>
              <p className="doc-exp">25 years</p>
            </div>
          </div>
        </div>



        <div className="box-container">
          <img
            src={img2}
            className="doctor-1 doc"
            height="250px"
            width="230px"
            alt=""
          />
          <div className="doc-overlay">
            <div className="doc-content">
              <h6 className="head-4">Dr. S.K. Gupta</h6>
              <p className="doc-occupatoin">General Surgeon</p>
              <p className="doc-exp">25 years</p>
            </div>
          </div>
        </div>
        <div className="box-container">
          <img
            src={img3}
            className="doctor-1 doc"
            height="250px"
            width="230px"
            alt=""
          />
          <div className="doc-overlay">
            <div className="doc-content">
              <h6 className="head-4">Dr. S.K. Gupta</h6>
              <p className="doc-occupatoin">General Surgeon</p>
              <p className="doc-exp">25 years</p>
            </div>
          </div>
        </div>
        <div className="box-container">
          <img
            src={img4}
            className="doctor-1 doc"
            height="250px"
            width="230px"
            alt=""
          />
          <div className="doc-overlay">
            <div className="doc-content">
              <h6 className="head-4">Dr. S.K. Gupta</h6>
              <p className="doc-occupatoin">General Surgeon</p>
              <p className="doc-exp">25 years</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default StellerDoc;
