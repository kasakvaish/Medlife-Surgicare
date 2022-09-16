import React from "react";
import SurgeryCovered from "./surgeriswecover";
import './pop1.css'

const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                <button

                    onClick={() => props.setTrigger(false)}


        style={{
          margin: "2%",
          border: "2px solid #FF6949",
          backgroundColor: "#FF6949",
          color: "white",
          fontSize: "1rem",
          padding: "1% 1.2%",
        }}
      >
        Show more surgeries
      </button>
            </div>
        </div>
    ) : "";
};

export default Popup;
