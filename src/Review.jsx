import React, { useState, useEffect} from 'react'
// import Download from './Download';
import img from "./Pic/rev_img_side.png";
import img1 from "./Pic/image_12-removebg-preview.png";
import img2 from "./Pic/image_15-removebg-preview.png";
import axios from "axios";
import './review.css';

function Review(props) {
  return (
    <div style={{margin:'1% 1%',backgroundColor:'#FFD2A2',padding:'2%',height: '200px',width: '380px',borderRadius: '15px',color:'#40464D'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
            <img src={props.dp} alt="" style={{width:'56px',height:'56px'}}/>
            <div style={{display:'flex',flexDirection:'column',paddingLeft:'2%'}}>
                <span style={{fontWeight: '400',fontSize: '18px',lineHeight: '26px'}}>{props.name}</span>
                <span style={{fontWeight: '400',fontSize: '13px',lineHeight: '17px'}}>{props.venue}</span>
            </div>
        </div>
        <div style={{fontWeight: '400',fontSize: '16px',lineHeight: '21px'}}>
            {props.text}
        </div>
    </div>
  )
}

function Reviews() {

  const [review, setReview] = useState([]);
  // getting results from the php api
  const loadReview = async () => {
    const result = await axios.get(
      "http://localhost/medlife/surgery_review.php"
    );
    setReview(result.data.data);
    console.log(result.data.data);
  };
  useEffect(() => {
    loadReview();
  }, []);


  return (
    <>
      <div
        style={{
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          margin: "0 2%",
        }}
      >
        <div
          style={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#40464D80",
          }}
        >
          <span>Want to hear about our track record?</span>
        </div>
        <div style={{ display: "flex", flexDirectiom: "row" }}>
          <div className="left" style={{ flex: "2" }}>
            <h2
              style={{
                color: "rgba(255, 105, 73, 0.83)",
                fontWeight: "700",
                fontSize: " 40px",
              }}
            >
              Hear from our customers
            </h2>
            <div
              className="cardRev"
              style={{ marginTop:"5%",marginRight: "2%", overflow: "scroll", height: "450px" }}
            >
              <div
                className="rev1"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {review.map((item) => (
                  <Review
                    dp={img1}
                    name={item.customer_name}
                    venue={item.location}
                    text={item.review}
                  />
                ))}
              </div>
              <div
                className="rev2"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {review.map((item) => (
                  <Review
                    dp={img1}
                    name={item.customer_name}
                    venue={item.location}
                    text={item.review}
                  />
                ))}
              </div>
              <div
                className="rev2"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {review.map((item) => (
                  <Review
                    dp={img1}
                    name={item.customer_name}
                    venue={item.location}
                    text={item.review}
                  />
                ))}
              </div>
              <div
                className="rev2"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {review.map((item) => (
                  <Review
                    dp={img1}
                    name={item.customer_name}
                    venue={item.location}
                    text={item.review}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="right">
            <img src={img} alt="" style={{ flex: "1" }} />
          </div>
        </div>

        <div style={{ marginLeft: "40%" }}>{/* <Download /> */}</div>
      </div>
    </>
  );
}
export default Reviews