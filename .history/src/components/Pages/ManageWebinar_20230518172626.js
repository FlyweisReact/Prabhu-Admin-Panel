/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import {Table} from 'react-bootstrap'

const ManageWebinar = () => {
  return (
    <>
      <Navbar />
      <div className="two-sec-head-2">
      <div className="left">
      <p>Manage Webinar</p>
      </div>

        <div className="right">
          <p className="specialText">Rescheduled Event</p>
          <button className="addbtn">
            <i className="fa-solid fa-plus"></i>Add New Webinar
          </button>
          <div className="filter">
          <i class="fa-solid fa-filter"></i>
          <p>Filter</p>
          </div>
        </div>
      </div>



      <div className="mainTable">
        <div className="ColorTable-head">
          <p>Manage Webinars</p>
        </div>
        <Table className="ColorTable">
          <thead>
            <tr>
              <th>Manage Webinars</th>
              <th> Description </th>
              <th> Status </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "green" }}>Approved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
          
          </tbody>
        </Table>
      </div>



    </>
  );
};

export default HOC(ManageWebinar);
