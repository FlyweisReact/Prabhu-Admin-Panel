/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const data = [
    {
      name: "DashBoard",
      link: "/dashboard",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "My Profile",
      link: "/profile",
      icon : <i className="fa-solid fa-user"></i>,
    },
    {
      name: "Suggest Webinar topics",
      link: "/webinar-topic",
      icon: <i class="fa-solid fa-file-pen"></i>,
    },
    {
      name: "Manage Webinar",
      link: "/",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Completed Webinar",
      link: "/",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Payment Details",
      link: "/",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Manage Webinar",
      link: "/",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Review & Questionnaire",
      link: "/",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Chat",
      link: "/",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
  ];

  return (
    <>
      <div className="side-cont">
        <p className="LogoImg">Logo</p>

        {data.map((i, index) => (
          <div className={i.link === location.pathname ? "activeLink side-list" : "side-list" } key={index}>
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
