/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../Images2/e1.png";
import img3 from "../Images2/e2.png";
import img4 from "../Images2/e3.png";

const Main = () => {
  const navigate = useNavigate();
  const [ inputType , setInputType ] = useState(false)

  return (
    <>
      <div className="main-cont">
        <div className="main-cont-left">
          <div className="logo">
            <h3>Logo</h3>
          </div>
        </div>

        <div className="main-cont-right">
          <div className="main-cont-right-1">
            <img src={img} alt="" />
            <p className="imgtxt">Prateek Sharma</p>

            <div className="two-input">
              <input type="text" placeholder="instructor login" />
              <img src={img4} alt="" />
            </div>
            <div className="two-input">
              <input type="text" placeholder="password" />
              <img src={img3} alt="" />
            </div>

            <p className="fgpass" onClick={() => navigate("/for-pass")}>
              Forgot Password ?
            </p>
            <button className="loginBtn" onClick={() => navigate("/dashboard")}>
              Login
            </button>
            <button className="loginBtn2">
              Login as (Business Account Manager){" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
