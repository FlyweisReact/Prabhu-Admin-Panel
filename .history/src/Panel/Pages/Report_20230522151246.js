/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import CanvasJSReact from "@canvasjs/react-charts";
import Dropdown from "react-bootstrap/Dropdown";
import ReactApexChart from "react-apexcharts";

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

 const Option2 = {
          
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  
  
  };





  return (
    <>

<div id="chart">
  <ReactApexChart options={Option2}  type="bar" height={350} />
</div>

      <div className="bar">
        <CanvasJSChart options={options} />
      </div>

      <div className="bar-two">
        <div className="left">
          <div className="two-sec">
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
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt='' />
              <p>Ramila Kaur</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt='' />
              <p>Ramila Kaur</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt='' />
              <p>Ramila Kaur</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt='' />
              <p>Ramila Kaur</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt='' />
              <p>Ramila Kaur</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt='' />
              <p>Ramila Kaur</p>
            </div>
          </div>
        </div>
        <div className="right">
        <div className="two-sec">
            <p>No of Speaker <span>50</span> </p>

            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Weekly
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Last Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

            <div className="element">
              <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='' />
              <p>Millie Bobby Brown</p>
            </div>
            <hr />
            <div className="element">
              <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='' />
              <p>Millie Bobby Brown</p>
            </div>
            <hr />
            <div className="element">
              <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='' />
              <p>Millie Bobby Brown</p>
            </div>
            <hr />


        </div>
      </div>
    </>
  );
};

export default HOC(Review);
