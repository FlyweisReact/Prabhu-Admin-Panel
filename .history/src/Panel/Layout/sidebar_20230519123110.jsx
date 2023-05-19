/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Store } from 'react-notifications-component';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = [
    {
      name: "DashBoard",
      link: "/account-manager-dash",
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Speacker List",
      link: "/speaker-list",
      icon: <i className="fa-solid fa-user"></i>,
    },
    {
      name: "Suggest Webinar topics",
      link: "/webinar-topic",
      icon: <i className="fa-solid fa-file-pen"></i>,
    },
    {
      name: "Manage Webinar",
      link: "/manage-webinar",
      icon: <i className="fa-solid fa-cubes"></i>,
    },
    {
      name: "Completed Webinar",
      link: "/complete-webinar",
      icon: <i className="fa-solid fa-table-list"></i>,
    },
    {
      name: "Payment Details",
      link: "/payment-details",
      icon: <i className="fa-solid fa-credit-card"></i>,
    },
    {
      name: "Review & Questionnaire",
      link: "/review",
      icon: <i className="fa-solid fa-rss"></i>,
    },
  ];


  
  function LogOut () { 
    Store.addNotification({
      title: "Logged Out",
      message : "" ,
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
    navigate('/')
  }

  return (
    <>
      <div className="side-cont">
        <p className="LogoImg">Logo</p>

        {data.map((i, index) => (
          <div
            className={
              i.link === location.pathname
                ? "activeLink side-list"
                : "side-list"
            }
            key={index}
          >
            <div className="lst-item-1" onClick={() => navigate(i.link)}>
              {i.icon}
              <p> {i.name} </p>
            </div>
          </div>
        ))}
        <div className={"side-list"}>
          <div className="lst-item-1">
            <i className="fa-solid fa-comment"></i>
            <p> Chat </p>
          </div>
        </div>
        <div className={"side-list"} onClick={() => LogOut()} > 
          <div className="lst-item-1">
            <i className="fa-solid fa-right-from-bracket"></i> <p> Logout </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
