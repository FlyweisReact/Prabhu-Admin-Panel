/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../Images2/e1.png";
import img3 from "../Images2/e2.png";
import img4 from "../Images2/e3.png";
import '../'
import { Store } from 'react-notifications-component';

const Main = () => {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState(true);

  const Login = async () => {
    try {
      Store.addNotification({
        title: "Welcome ",
        message : "Logged In Successfully" ,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1500,
          onScreen: true
        }
      });
      navigate('/dashboard')
    }catch(e) { 
       console.log(e)
    }
  }

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
              <input
                type={inputType ? "password" : "text"}
                placeholder="password"
              />
              <img
                src={img3}
                alt=""
                onClick={() => setInputType(!inputType)}
                style={{ cursor: "pointer" }}
              />
            </div>

            <p className="fgpass" onClick={() => navigate("/for-pass")}>
              Forgot Password ?
            </p>
            <button className="loginBtn" onClick={() => Login()}>
              Login
            </button>
            <button className="loginBtn2" onClick={() => navigate('/account-manager-dash')} >
              Login as (Business Account Manager){" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
