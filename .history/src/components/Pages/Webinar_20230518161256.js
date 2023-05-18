/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";

const Webinar = () => {
  return (
    <>
      <Navbar />

      <div className="two-sec-head">
        <p>Suggest Webinar Topic</p>
        <button>
          <i className="fa-solid fa-plus"></i>Add Webinar Topic
        </button>
      </div>

      <
    </>
  );
};

export default HOC(Webinar);
