import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../Images2/e1.png";
import img3 from "../Images2/e2.png";
import img4 from "../Images2/e3.png";

const Main = () => {
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
            <div className="form-main">
              <div className="formitm">
                <input type="text" placeholder="instructor login" />
                <img src={img4} alt='' />
              </div>
            </div>
            <div className="form-main">
              <div className="formitm">
                <input type="text" placeholder="password" />
                <img src={img3} alt='' />
              </div>
            </div>
            <p className="fgpass" onClick={() => navigate("/for-pass")}>
              Forgot Password ?
            </p>
            <div className="form-main">
              <button onClick={()=>navigate("/dashboard")}>Login</button>
            </div>
            <div className="form-main">
              <button style={{ fontSize: "17px" }}>
                Login as (Business Account Manager){" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
