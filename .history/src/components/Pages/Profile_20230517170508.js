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
        <div className="left">
          <img src={img} alt="" />
          <div>
            <p className="head">Palak Sharma</p>
            <p className="head2">Instructor</p>
          </div>
        </div>

        <div className="right">
          <button>Edit</button>
        </div>
      </div>

      <div className="ProfileSecond">
        <p className=""> Detailed BIO</p>
        <p>
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra,{" "}
        </p>
      </div>
    </>
  );
};

export default HOC(Profile);
