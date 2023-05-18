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

            <div className="mainTable">

            <div className="ColorTable-head">
            <p>Suggest Webinar Topic</p>
        </div>
      <Table className="ColorTable">
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
                    <td className="desc">Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : 'green'}}>Approved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : '#F31111'}}>Disapproved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : 'green'}}>Approved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : '#F31111'}}>Disapproved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : 'green'}}>Approved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : '#F31111'}}>Disapproved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : 'green'}}>Approved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : '#F31111'}}>Disapproved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : 'green'}}>Approved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : '#F31111'}}>Disapproved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : 'green'}}>Approved</td>
                    <td>
                        <button>Submit</button>
                    </td>
                </tr>
                <tr>
                    <td>Cross Industry</td>
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</td>
                    <td style={{color : '#F31111'}}>Disapproved</td>
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

export default HOC(Webinar);
