/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import img from "../../Images2/e1.png";

const Profile = () => {
  const navigate = useNaviga
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
        <p className="head"> Detailed BIO</p>
        <p className="text">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra,{" "}
        </p>
      </div>

      <div className="ProfileSecond">
        <p className="head">Phone Number</p>
        <div style={{ display: "flex", gap: "50px" }}>
          <p className="text">+91 8856230215</p>
          <p className="text">+91 87878787845</p>
        </div>
      </div>

      <div className="ProfileSecond">
        <p className="head">Email Address</p>
        <p className="text">kso98@gmail.com</p>
      </div>


      <div className="ProfileSecond">
        <p className="head">GRC Educators Contract.</p>
          <button>View</button>
      </div>
    </>
  );
};

export default HOC(Profile);
