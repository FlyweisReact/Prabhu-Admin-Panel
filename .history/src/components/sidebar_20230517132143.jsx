import React from "react";
import {useNavigate} from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();

  const data  = [ 
    {
      name : "DashBoard" , 
      link : "/dashboard" , 
      icon :    <i className="fa-solid fa-qrcode"></i>
    }
  ]

  return (
    <>
      <div className="side-cont">
        <p className="LogoImg">Logo</p>

        {data.map((i , index) => (
          
        <div className="side-list" key={index}>
            <div className="lst-item-1" onClick={()=>navigate("/dashboard")}>
         
              <p>Dash Board</p>
               </div>
  
        </div>
        ))}

      </div>
    </>
  );
};

export default Sidebar;
