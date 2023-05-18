import React, { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import img9 from "../Images/c-3.png";
import img10 from "../Images/c-4.png";
import img11 from "../Images/c-5.png";
import img12 from "../Images/c-6.png";
import img13 from "../Images2/e5.png";
import HOC from "./Layout/HOC";

const DashBoard = () => {
 
  const navigate = useNavigate();

  return (
    <>
      <div className="dash-cont">
        <div className="dash-right">
          <Navbar />
          <div className="dashrighttop">
            <h1>Dashboard</h1>
            <div className="addbtn" onClick={()=>navigate("/add")}>
              <img src={img13} />
              <p>Add New Course</p>
            </div>
          </div>
          <div className="dash-right-mid">
            <div className="mid-box" onClick={() => navigate("/add")}>
              <p className="boxtxt">Enrolled Webinars</p>
              <p className="boxcnt">120</p>
            </div>
            <div className="mid-box" onClick={() => navigate("/add")}>
              <p className="boxtxt">Active Webinars</p>
              <p className="boxcnt">100</p>
            </div>
            <div className="mid-box" onClick={() => navigate("/add")}>
              <p className="boxtxt">Completed Webinars</p>
              <p className="boxcnt">80</p>
            </div>
            <div className="mid-box" onClick={() => navigate("/add")}>
              <p className="boxtxt">Total Webinars</p>
              <p className="boxcnt">150</p>
            </div>
            <div className="mid-box" onClick={() => navigate("/add")}>
              <p className="boxtxt">Payment Recieved</p>
              <p className="boxcnt">$ 2020</p>
            </div>
          </div>
          <div className="dashbelowcont">
            <div className="belowhead">
              <h3>Upcoming Webinars</h3>
              <table className="belowtable">
                <thead>
                  <tr>
                    <th>Webinar Titles</th>
                    <th>Live date</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td><button className="tablebtn">Published</button></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td><button className="tablebtn">Published</button></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td><button className="tablebtn">Published</button></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td><button className="tablebtn">Published</button></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td><button className="tablebtn">Published</button></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td><button className="tablebtn">Published</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(DashBoard);
