/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import img from "../../Images2/e1.png";

const Profile = () => {
  return (
    <>
      <Navbar />

      <p className="profileId">ID-25250002503658</p>

      <div className="Profile">
        <div>
        <img src={img} alt="" />\<div>
          
        </div>
          <p>Palak Sharma</p>
          <p>Instructor</p>
        </div>

        <button>Edit</button>
      </div>
    </>
  );
};

export default HOC(Profile);
