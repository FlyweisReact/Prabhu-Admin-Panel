import React from "react";
import {useNavigate} from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();

  const data  = [ 
    {
      name : "DashBoard" , 
      link : "/dashboard" , 
      icon : 
    }
  ]

  return (
    <>
      <div className="side-cont">

        <p className="LogoImg">Logo</p>

        <div className="side-list">
            <div className="lst-item-1" onClick={()=>navigate("/dashboard")}>
         
              <p>Dash Board</p>
               </div>
  
        </div>
      </div>
    </>
  );
};

export default Sidebar;
