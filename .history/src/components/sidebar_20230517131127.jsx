import React from "react";
import {useNavigate} from "react-router-dom";
import img2 from "../Images/c-3.png";
import img3 from "../Images/c-4.png";
import img4 from "../Images/c-5.png";
import img5 from "../Images/c-6.png";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-cont">

        <p className="LogoImg">Logo</p>

        <div className="side-list">
            <div className="lst-item-1" onClick={()=>navigate("/dashboard")}>
              <img src={img2} alt="" />
              <p>Dash Board</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/subs")}>
            <div className="lst-item-1">
              <img src={img3} alt="" />
              <p>My Profile</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/staff")}>
            <div className="lst-item-1">
              <img src={img4} alt="" />
              <p>Suggested Webinar Topics</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/review")}>
            <div className="lst-item-1">
              <img src={img5} alt="" />
              <p>Manage Webinar</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/review")}>
            <div className="lst-item-1">
              <img src={img5} alt="" />
              <p>Completed Webinar</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/review")}>
            <div className="lst-item-1">
              <img src={img5} alt="" />
              <p>Payment Details</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/review")}>
            <div className="lst-item-1">
              <img src={img5} alt="" />
              <p>Review and Questionnaire</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/review")}>
            <div className="lst-item-1">
              <img src={img5} alt="" />
              <p>Chat</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/review")}>
            <div className="lst-item-1">
              <img src={img5} alt="" />
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
