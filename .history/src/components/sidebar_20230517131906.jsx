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
            <i class="fa-solid fa-qrcode"></i>
              <p>Dash Board</p>
               </div>
  
        </div>
      </div>
    </>
  );
};

export default Sidebar;
