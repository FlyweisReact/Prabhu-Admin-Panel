/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import CanvasJSReact from "@canvasjs/react-charts";
import Dropdown from "react-bootstrap/Dropdown";

const Review = () => {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    data: [
      {
        color: "#616161",
        type: "column",
        dataPoints: [
          { label: "JAN", y: 10 },
          { label: "FEB", y: 15 },
          { label: "MAR", y: 25 },
          { label: "APR", y: 30 },
          { label: "MAY", y: 28 },
          { label: "JUN", y: 10 },
          { label: "JUL", y: 15 },
          { label: "AUG", y: 25 },
          { label: "SEP", y: 30 },
          { label: "OCT", y: 28 },
          { label: "NOV", y: 10 },
          { label: "DEC", y: 15 },
        ],
      },
    ],
  };

  return (
    <>
      <div className="bar">
        <CanvasJSChart options={options} />
      </div>

      <div className="bar-two">
        <div className="left">
          <div>
            <p>TOP PERFORMING SPEAKER</p>

            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Last Year
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Last Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="three-sec">
            <div>
              <img src=""
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default HOC(Review);
