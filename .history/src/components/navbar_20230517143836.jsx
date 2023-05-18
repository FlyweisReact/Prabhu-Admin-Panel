/** @format */

import React from "react";
import img from "../Images2/e6.png";
import img2 from "../Images2/e1.png";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <>
      <div className="New-navbar">
        <div className="left">
          <div className="searchDiv">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="search" />
          </div>
        </div>
        <div className="right">
          <img src={img} alt="" className="notificationImage" />
          <img src={img2} alt="" className="profileImage" />
          <div className="text-div">
            <p>Palak Sharma</p>
            <p>Instructor Logged In</p>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Logout </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbar;
