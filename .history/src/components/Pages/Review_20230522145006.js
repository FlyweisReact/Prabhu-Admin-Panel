/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="two-sec-head">
        <p>Review & Questionnaire</p>

        <button
          className="addbtn2"
          style={{ textAlign: "center" }}
          onClick={() => navigate("/add-ques")}
        >
          Questionnaire
        </button>
      </div>

      <div className="mainTable">
        <div className="ColorTable-head">
          <p>Review</p>
        </div>
        <div className="overflow-cont">
        <Table className="ColorTable">
          <thead>
            <tr>
              <th>Webinar</th>
              <th> Webinar Titles </th>
              <th> Live Date </th>
              <th> Rating </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td>
                <span className="d-flex gap-2 justify-center"  >
                  <i className="fa-solid fa-star" style={{ color: "#FBBC05" }}>
                    {" "}
                  </i>
                  <span>4.5</span>
                  <span>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-star" style={{ color: "#FBBC05" }}>
                    {" "}
                  </i>
                  <span>4.5</span>
                  <span>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-star" style={{ color: "#FBBC05" }}>
                    {" "}
                  </i>
                  <span>4.5</span>
                  <span>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-star" style={{ color: "#FBBC05" }}>
                    {" "}
                  </i>
                  <span>4.5</span>
                  <span>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-star" style={{ color: "#FBBC05" }}>
                    {" "}
                  </i>
                  <span>4.5</span>
                  <span>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-star" style={{ color: "#FBBC05" }}>
                    {" "}
                  </i>
                  <span>4.5</span>
                  <span>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-star" style={{ color: "#FBBC05" }}>
                    {" "}
                  </i>
                  <span>4.5</span>
                  <span>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-star" style={{ color: "#FBBC05" }}>
                    {" "}
                  </i>
                  <span>4.5</span>
                  <span>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-star" style={{ color: "#FBBC05" }}>
                    {" "}
                  </i>
                  <span>4.5</span>
                  <span>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
        </div>
      </div>
    </>
  );
};

export default HOC(Review);
