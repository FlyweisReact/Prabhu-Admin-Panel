/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import CanvasJSReact from "@canvasjs/react-charts";

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

  const options2 = {
    exportEnabled: true,
    animationEnabled: true,
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Direct" },
          { y: 49, label: "Organic Search" },
          { y: 9, label: "Paid Search" },
          { y: 5, label: "Referral" },
          { y: 19, label: "Social" },
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
              <p></p>
            </div>
        </div>
        <div className="right">
    
        </div>
      </div>

   </>
   
  );
};

export default HOC(Review);
