import React from "react";
// import {Link} from 'react-router-dom'
// import './navbar.css';
import Cart from "./imgs/cart.png";
import login from "./imgs/login.png";
import medicine from "./imgs/Medlife.png";
import Map from "./Logos/map.png";

function Navbar() {
  return (
    <div>
      {/* color : fd9176; */}
      <div className="header_main">
        <div className="navbar">
          <div className=" container-fluid maxwidth">
            <div className="col-5 col-sm-8 ">
              <form className="d-flex " role="search">
                <img src={medicine} className="icon" alt="text" />
                <div>
                  <img src={Map} alt =""/>
                </div>
                <div>
                  <a
                    href="https://google.com"
                    className="navbar-brand text-light"
                  >
                    Deliver At
                                  </a>
                                  



                </div>
                
                <input
                  className="form-control me-2 searchinput"
                  type="search"
                  placeholder="Search for medicine and wellness products"
                  aria-label="Search"
                />
              </form>
            </div>

            <div className=" col-sm-3 col-12 cart">
              {/* <span>Register</span> */}
              <button className="btn mr-3 loginbtn" type="submit">
                <img src={Cart} width="25px" alt="" />
                Cart
              </button>
              <a href="https://google.com">
                <button className="btn loginbtn" type="submit">
                  <img src={login} width="25px" alt="" /> Login
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
