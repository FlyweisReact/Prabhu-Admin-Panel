import React from "react";
import {useNavigate} from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();

  const sideBar = 

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
