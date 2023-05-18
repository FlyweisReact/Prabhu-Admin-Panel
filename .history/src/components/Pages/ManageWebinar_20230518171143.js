/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";

const ManageWebinar = () => {
  return (
    <>
      <Navbar />
      <div className="two-sec-head-2">
        <p>Manage Webinar</p>

        <div>
          <p>Rescheduled Event</p>
          <button>
            <i className="fa-solid fa-plus"></i>Add New Webinar
          </button>
          <
        </div>
      </div>
    </>
  );
};

export default HOC(ManageWebinar);
