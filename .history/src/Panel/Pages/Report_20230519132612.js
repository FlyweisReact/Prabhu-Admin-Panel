/** @format */

import React from "react";
import HOC from "../Layout/HOC";
// import CanvasJSReact from "@canv`asjs/react-charts";
import 
{ BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
 ResponsiveContainer } from 'recharts';


 const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Review = () => {
  // var CanvasJSChart = CanvasJSReact.CanvasJSChart;


  // const options = {
  //   data: [
  //     {
  //       color : "#616161",
  //       type: "column",
  //       dataPoints: [
  //         { label: "JAN", y: 10 },
  //         { label: "FEB", y: 15 },
  //         { label: "MAR", y: 25 },
  //         { label: "APR", y: 30 },
  //         { label: "MAY", y: 28 },
  //         { label: "JUN", y: 10 },
  //         { label: "JUL", y: 15 },
  //         { label: "AUG", y: 25 },
  //         { label: "SEP", y: 30 },
  //         { label: "OCT", y: 28 },
  //         { label: "NOV", y: 10 },
  //         { label: "DEC", y: 15 },
  //       ],
  //     },
  //   ],
  // };
  return (
    <div className="bar">
    {/* <CanvasJSChart options={options} /> */}

    <BarChart data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    </div>
  );
};

export default HOC(Review);
