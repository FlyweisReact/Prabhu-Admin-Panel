/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import img from "../../Images2/e1.png";
import { Store } from 'react-notifications-component';
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate()
  
  const EditProfile = async () => {
    try{
        Store.addNotification({
          title: "Updated : Profile Detailed Updated ",
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
        navigate('/profile')
    }catch(e)  { 
      console.log(e)
    }
  }

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
              <input type="text" placeholder="Enter Your First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <br />
              <input type="text" placeholder=" Enter Your Last Name" />
            </div>
          </div>

          <div className="two-sec">
            <div>
              <label>Mobile Number</label>
              <br />
              <input
                type="tel"
                pattern="[0-9]{10}"
                placeholder=" Enter Your Mobile Number"
              />
            </div>
            <div>
              <label>Email</label>
              <br />
              <input type="email" placeholder=" Enter Your Email Address" />
            </div>
          </div>

          <p className="h1" style={{ marginTop: "40px" }}>
            Detailed BIO
          </p>
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
