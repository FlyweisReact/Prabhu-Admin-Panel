/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import img from "../../Images2/e1.png";

const EditProfile = () => {
  return (
    <>
      <Navbar />

      <div className="edit-profile">
        <div className="left">
          <p className="head">Profile</p>
          <img src={img} alt="" />
          <p className="desc">
            Lorem Ipsum <br /> Instructor
          </p>
        </div>

        <div className="right">
          <p className="h1"> Basic Info</p>
          <hr />

          <div className="two-sec">
            <div>
              <label>First Name</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Last Name</label>
              <br />
              <input type="text" />
            </div>
          </div>

          <div className="two-sec">
            <div>
              <label>Mobile Number</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Email</label>
              <br />
              <input type="text" />
            </div>
          </div>

          <p className="h1" style={{marginTop  : '40px'}}>Detailed BIO</p>
          <hr />
          <div className="down-sec">
            <textarea placeholder="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." />
          </div>

          <div className="two-btn">
            <button className="firstBtn">Cancel</button>
            <button className="secondBtn">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(EditProfile);
