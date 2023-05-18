/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";

const ManageWebinar = () => {
  return (
    <>
      <Navbar />
      <div className="two-sec-head-2">
      <div className="left">
        
      </div>
        <p>Manage Webinar</p>

        <div className="right">
          <p>Rescheduled Event</p>
          <button>
            <i className="fa-solid fa-plus"></i>Add New Webinar
          </button>
          <div>
          <i class="fa-solid fa-filter"></i>
          Filter
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(ManageWebinar);
