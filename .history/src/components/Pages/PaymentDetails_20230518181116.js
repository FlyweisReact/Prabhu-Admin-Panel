import React  from "react";
import { Table } from "react-bootstrap";
import Navbar from "../navbar";
import HOC from "../Layout/HOC";

const PaymentDetails = () => {
   
    const data = [
      {
        title: "Cross Industry",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "Pharmaceutical",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "Bio Technology",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "Food & Dietary",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "HR Compliance",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "Quality Management",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "Risk Management",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "OSHA Compliance",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "Trade & Logistic",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "Account & Taxation",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
      {
        title: "Service Coaching",
        liveDate: "05.05.2023",
        time: "04:00 AM",
      },
    ];
  
    return (
      <>
        <Navbar />
    
  
        <div className="dash-cont">
          <div className="dash-right">
            <div className="dash-right-mid">
              <div className="mid-box" >
                <p className="boxtxt"> Monthly Revenue     </p>
                <p className="boxcnt">$1500</p>
              </div>
              <div className="mid-box">
                <p className="boxtxt"> Total Transaction </p>
                <p className="boxcnt">280</p>
              </div>
              <div className="mid-box">
                <p className="boxtxt"> Total Revenue </p>
                <p className="boxcnt">80</p>
              </div>
              <div className="mid-box">
                <p className="boxtxt"> Total Webinars </p>
                <p className="boxcnt">150</p>
              </div>
              <div className="mid-box">
                <p className="boxtxt"> Payment Received </p>
                <p className="boxcnt">$ 2020</p>
              </div>
            </div>
  
            <div className="mainTable">
              <div className="ColorTable-head">
                <p>Upcoming Webinars</p>
              </div>
              <Table className="ColorTable">
                <thead>
                  <tr>
                    <th>Webinar Titles </th>
                    <th> Live date </th>
                    <th> Time </th>
                    <th> Status </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((i, index) => (
                    <tr key={index}>
                      <td> {i.title} </td>
                      <td> {i.liveDate} </td>
                      <td> {i.time} </td>
                      <td>
                        <button
                          style={{
                            background: "#52de2f",
                            border: "1px solid #52de2f",
                          }}
                        >
                          Published
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </>
    );
  };

export default HOC(PaymentDetails)