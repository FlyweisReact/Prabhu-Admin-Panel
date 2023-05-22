/** @format */

import { useNavigate } from "react-router-dom";
import HOC from "./Layout/HOC";
import { Table } from "react-bootstrap";

const DashBoard = () => {
  const navigate = useNavigate();

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
    <><div className="two-sec-head">
        <p>Dashboard</p>
      </div>

      <div className="dash-cont">
        <div className="dash-right">
          <div className="dash-right-mid">
            <div className="mid-box" >
              <p className="boxtxt"> Monthly Reviewed webinar </p>
              <p className="boxcnt">120</p>
            </div>
            <div
              className="mid-box"
              onClick={() => navigate("/manage-webinar")}
            >
              <p className="boxtxt"> Total Reviewed webinar </p>
              <p className="boxcnt">100</p>
            </div>
            <div
              className="mid-box"
              onClick={() => navigate("/complete-webinar")}
            >
              <p className="boxtxt"> Pending Review </p>
              <p className="boxcnt">80</p>
            </div>
          
          </div>

          <div className="mainTable">
            <div className="ColorTable-head">
              <p>Upcoming Webinars</p>
            </div>
            <div className="overflow-cont">
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
      </div>
    </>
  );
};

export default HOC(DashBoard);
