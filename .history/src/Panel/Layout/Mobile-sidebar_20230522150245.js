/** @format */

import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";

export function MobileSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      link: "/suggest-webinar",
      icon: <i className="fa-solid fa-file-pen"></i>,
    },
    {
      name: "Manage Webinar",
      link: "/vendor-manage-webinar",
      icon: <i className="fa-solid fa-cubes"></i>,
    },
    {
      name: "Completed Webinar",
      link: "/vendor-complete-webinar",
      icon: <i className="fa-solid fa-table-list"></i>,
    },
    {
      name: "Reports",
      link: "/report",
      icon: <i className="fa-solid fa-table-list"></i>,
    },

  ];

  function LogOut() {
    Store.addNotification({
      title: "Logged Out",
      message: "",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
    navigate("/");
  }

  return (
    <>
      <i className="fa-solid fa-bars" onClick={handleShow} />

      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: "#121212", height: "100%", padding: "0px" }}
      >
        <Offcanvas.Body style={{padding : '0px'}} className='mobile-bar'>
        <i className="fa-solid fa-x" onClick={() => handleClose()}></i>
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
            <div className={"side-list"} onClick={() => LogOut()}>
              <div className="lst-item-1">
                <i className="fa-solid fa-right-from-bracket"></i>{" "}
                <p> Logout </p>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
