/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import { Store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

const AddQues = () => {

    const navigate = useNavigate()

    const AddAnswer 

  return (
    <>
      <Navbar />
      <div className="two-sec-head">
        <p>Questionnaire</p>
      </div>

      <div className="Question-Div">
        <div>
          <p>
            Q1 Lorem ipsum dolor sit amet, consetetur sadipscing , sed diam
            nonumy eirmod tempor ?
          </p>

          <div className="answer">
            <textarea placeholder="Type a Question" />

            <div className="two-Btns">
              <button className="first">Cancel</button>
              <button className="second">Submit</button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <p>
            Q2 Lorem ipsum dolor sit amet, consetetur sadipscing , sed diam
            nonumy eirmod tempor ?
          </p>

          <div className="answer">
            <textarea placeholder="Type a Question" />

            <div className="two-Btns">
              <button className="first">Cancel</button>
              <button className="second">Submit</button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <p>
            Q3 Lorem ipsum dolor sit amet, consetetur sadipscing , sed diam
            nonumy eirmod tempor ?
          </p>

          <div className="answer">
            <textarea placeholder="Type a Question" />

            <div className="two-Btns">
              <button className="first">Cancel</button>
              <button className="second">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(AddQues);
