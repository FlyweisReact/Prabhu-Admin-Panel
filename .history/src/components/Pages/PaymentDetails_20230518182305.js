/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import Navbar from "../navbar";
import HOC from "../Layout/HOC";

const PaymentDetails = () => {
  return (
    <>
      <Navbar />

      <div className="dash-cont" style={{ marginTop: "5%" }}>
        <div className="dash-right">
          <div className="dash-right-mid">
            <div className="mid-box">
              <p className="boxtxt"> Monthly Revenue </p>
              <p className="boxcnt">$1500</p>
            </div>
            <div className="mid-box">
              <p className="boxtxt"> Total Transaction </p>
              <p className="boxcnt">280</p>
            </div>
            <div className="mid-box">
              <p className="boxtxt"> Total Revenue </p>
              <p className="boxcnt">$3600</p>
            </div>
         
          </div>

          <div className="two-sec-head">
            <p>Payment Details</p>
          </div>

          <div className="mainTable">
            <div className="ColorTable-head">
              <p>Payment History</p>
            </div>
            <Table className="ColorTable">
              <thead>
                <tr>
                  <th>Transaction ID </th>
                  <th> Payment Date </th>
                  <th> Webinar Title </th>
                  <th>Payment mode </th>
                  <th> Status </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2125220202516</td>
                  <td>06.05.2023</td>
                  <td>Cross Industry</td>
                  <td>ACH</td>
                  <td style={{ color: "green" }}>Completed</td>
                </tr>
                <tr>
                  <td>2125220202516</td>
                  <td>06.05.2023</td>
                  <td>Cross Industry</td>
                  <td>ACH</td>
                  <td style={{ color: "green" }}>Completed</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(PaymentDetails);
