import React from "react";
import './middlecards.css'


function MiddleCard(props) {
    return (
        <div className="middlecard">
            <div className="container-x">
                <div className="sidewala">
                    <div>
                        <img src = {props.img} alt = "" ></img>
                    </div>
                    <div className="straight">
                        <h3>
                            {props.header}
                        </h3>
                        <p>
                            {props.txt}
                        </p>
                        </div>
                    </div>

            </div>    

        </div>
    )
}
export default MiddleCard;