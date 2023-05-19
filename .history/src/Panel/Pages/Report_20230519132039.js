/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import CanvasJSReact from "@canvasjs/react-charts";

const Review = () => {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;


  const options = {
    data: [
      {
        color : "#616161",
        type: "column",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
        ],
      },
    ],
  };
  return (
    <div className="bar">
    <CanvasJSChart options={options} />

    </div>
  );
};

export default HOC(Review);
