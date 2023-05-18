/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import {Table } from 'react-bootstrap'

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

      <Table>
            <thead>
                <tr>
                    <th>Webinar</th>
                </tr>
            </thead>
      </Table>
    </>
  );
};

export default HOC(Webinar);
