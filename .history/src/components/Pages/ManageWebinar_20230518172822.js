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



      <div className="mainTable2">
        <div className="ColorTable-head-2">
          <p>Manage Webinars</p>
        </div>
        <Table className="ColorTable">
          <thead>
            <tr>
              <th>Webinar Titles</th>
              <th> Description </th>
              <th> Date </th>
              <th> Time </th>
              <th> Status </th>
              <th> Edit </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "green" }}>Reviewed</td>
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
