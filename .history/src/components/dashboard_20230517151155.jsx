/** @format */

import React from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import HOC from "./Layout/HOC";

const DashBoard = () => {
  const navigate = useNavigate();

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
  const dashData = [
    {
      name: "Enrolled Webinars",
      number: "120",
    },
    {
      name: "Active Webinars",
      number: "100",
    },
    {
      name: "Completed Webinars",
      number: "80",
    },
    {
      name: "Total Webinars",
      number: "150",
    },
    {
      name: "  Payment Received",
      number: "$ 2020",
    },
  ];

  return (
    <>
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
            {dashData.map((i, index) => (
              <div
                className="mid-box"
                onClick={() => navigate("/add")}
                key={index}
              >
                <p className="boxtxt"> {i.name} </p>
                <p className="boxcnt">{i.number}</p>
              </div>
            ))}
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