import React from 'react';
import {useNavigate} from "react-router-dom";
import img from '../Images2/e1.png';
import img3 from "../Images2/e2.png";
import img4 from "../Images2/e3.png";

const Main = ()=>{
    const navigate = useNavigate();
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

            <div className="two-input" style={{marginTop  : '40px'}}>
              <input type="text" placeholder="Create New Password" />
              <img src={img4} alt="" />
            </div>
            <div className="two-input" style={{marginTop  : '40px'}}>
              <input type="text" placeholder="Confirm New Password" />
              <img src={img3} alt="" />
            </div>
            <button className="loginBtn" onClick={() => navigate("/dashboard")} style={{marginTop  : '40px'}}>
              Submit
            </button>
          </div>
        </div>
      </div>
        </>
    )
}

export default Main;