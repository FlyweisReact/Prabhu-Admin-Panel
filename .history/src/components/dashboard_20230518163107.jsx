/** @format */

import React, { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import HOC from "./Layout/HOC";
import {Table} from 'react-bootstrap'
import { EnrolledWebinar } from "./Modal/Modals";

const DashBoard = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const data = [
    {
      title: "Cross Industry",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "Pharmaceutical",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "Bio Technology",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "Food & Dietary",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "HR Compliance",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "Quality Management",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "Risk Management",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "OSHA Compliance",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "Trade & Logistic",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "Account & Taxation",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
    {
      title: "Service Coaching",
      liveDate: "05.05.2023",
      time: "04:00 AM",
    },
  ];

  return (
    <>
      <EnrolledWebinar show={modalShow} onHide={() => setModalShow(false)} />
      <Navbar />
      <div className="two-sec-head">
        <p>Dashboard</p>
        <button onClick={() => navigate("/add")}>
          {" "}
          <i className="fa-solid fa-plus"></i>Add New Course
        </button>
      </div>

      <div className="dash-cont">
        <div className="dash-right">
          <div className="dash-right-mid">
            <div className="mid-box" onClick={() => setModalShow(true)}>
              <p className="boxtxt"> Enrolled Webinars </p>
              <p className="boxcnt">120</p>
            </div>
            <div className="mid-box">
              <p className="boxtxt"> Active Webinars </p>
              <p className="boxcnt">100</p>
            </div>
            <div className="mid-box">
              <p className="boxtxt"> Completed Webinars </p>
              <p className="boxcnt">80</p>
            </div>
            <div className="mid-box">
              <p className="boxtxt"> Total Webinars </p>
              <p className="boxcnt">150</p>
            </div>
            <div className="mid-box">
              <p className="boxtxt"> Payment Received </p>
              <p className="boxcnt">$ 2020</p>
            </div>
          </div>

          <div className="mainTable">

<div className="ColorTable-head">
<p>Upcoming Webinars</p>
</div>
<Table className="ColorTable">
<thead>
    <tr>
        <th>Webinar Titles	</th>
        <th> Live date	 </th>
        <th> Status </th>
        <th> Action </th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Cross Industry</td>
        <td >Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
        <td style={{color : 'green'}}>Approved</td>
        <td>
            <button>Submit</button>
        </td>
    </tr>
   
</tbody>
</Table>
</div>

          <div className="dashbelowcont">
            <div className="belowhead">
              <h3>Upcoming Webinars</h3>
              <div className="belowtable">
                <table className="webinar-table">
                  <thead>
                    <tr>
                      <th>Webinar Titles</th>
                      <th>Live date</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((i, index) => (
                      <tr key={index}>
                        <td> {i.title} </td>
                        <td> {i.liveDate} </td>
                        <td> {i.time} </td>
                        <td>
                          <button className="tablebtn">Published</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(DashBoard);
