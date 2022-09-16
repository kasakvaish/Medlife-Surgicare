import React from "react";
import './knowusbetter.css';


import IMG1 from './Image/IMAGEknowusbetter.png';
import IMG2 from './Image/IMAGEknowusbetter2.png';
function KnowUsBetter() {
    return (
        <div>
            <div className="kub">
                <img src={IMG1} alt="" className="limg"/>
                <div className="middle">
                <h4>Know Us Better</h4>
                <div className="text">
                    Medlife SurgiCare aims to connect hospitals and consumers for daycare surgeries and ensures a smooth experience before, during and post-treatment. We assist you in every step, from scheduling your surgery, receiving a detailed diagnosis, communing to and from the hospital to completing insurance paperwork. We even handle hospital discharge and follow-up consultations.
                    </div>
                    
                    </div>
                <img src={IMG2} alt="" className="rimg"/>


            </div>

        </div>





    );



}
export default KnowUsBetter;