/** @format */

import React from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";

const AddQues = () => {
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
        
      </div>
    </>
  );
};

export default HOC(AddQues);
