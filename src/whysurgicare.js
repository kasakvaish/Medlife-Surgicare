import React from "react";
import img1 from "./Pic/recimg1.png";
import img2 from "./Pic/recimg2.png";
import img3 from "./Pic/recimg3.png";
import img4 from "./Pic/recimg4.png";
import img5 from "./Pic/recimg5.png";

import "./whysurgicare.css";
function WhySurgiCare() {
  return (
    <div>
      <div className="head">
        <h1>Why opt for Surgicare</h1>
      </div>
      <div className="imgs">
        <div className="box-container">
          <img src={img1} alt="" className="images" />
          <div className="doc-overlay">
            <div className="images-text doc-content">
              <p> Team of Expirienced Surgens</p>
            </div>
          </div>
        </div>
        <div className="box-container">
          <img src={img2} alt="" className="images" />
          <div className="doc-overlay">
            <div className="images-text doc-content">
              <p> Dedicated Expert Care</p>
            </div>
          </div>
        </div>

        <div className="box-container">
          <img src={img3} alt="" className="images" />
          <div className="doc-overlay">
            <div className="images-text doc-content">
              <p> 100% Cashless Procedure with minimum 20% Savings</p>
            </div>
          </div>
        </div>

        <div className="box-container">
          <img src={img4} alt="" className="images" />
          <div className="doc-overlay">
            <div className="images-text doc-content">
              <p> Team of Expirienced Surgens</p>
            </div>
          </div>
        </div>

        <div className="box-container">
          <img src={img5} alt="" className="images" />
          <div className="doc-overlay">
            <div className="images-text doc-content">
              <p> Team of Expirienced Surgens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhySurgiCare;
