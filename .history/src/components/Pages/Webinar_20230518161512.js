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

        <div>
            <p>Suggest Webinar Topic</p>
        </div>
      <Table>
            <thead>
                <tr>
                    <th>Webinar</th>
                    <th> Description </th>
                    <th> Status </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td>Approved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
            </tbody>
      </Table>
    </>
  );
};

export default HOC(Webinar);
