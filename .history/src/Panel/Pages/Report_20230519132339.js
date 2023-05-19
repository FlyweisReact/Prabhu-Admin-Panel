/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import CanvasJSReact from "@canvasjs/react-charts";

const Review = () => {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;


  const options = {
    data: [
      {
        color : "#616161",
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
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
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
