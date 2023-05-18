/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  con

  const data = [
    {
      name: "DashBoard",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "My Profile",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Suggest Webinar topics",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Manage Webinar",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Completed Webinar",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Payment Details",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Manage Webinar",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Review & Questionnaire",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Chat",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
  ];

  return (
    <>
      <div className="side-cont">
        <p className="LogoImg">Logo</p>

        {data.map((i, index) => (
          <div className={i.link === } key={index}>
            <div className="lst-item-1" onClick={() => navigate(i.link)}>
              {i.icon}
              <p> {i.name} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
