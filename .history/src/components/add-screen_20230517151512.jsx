import React, { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import img9 from "../Images/c-3.png";
import img10 from "../Images/c-4.png";
import img11 from "../Images/c-5.png";
import img12 from "../Images/c-6.png";

const AddScreen = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prev) => !prev);
  };


  return (
    <>
      {show ? <MobileBar className="mobilSideShow" /> : ""}
      <div className="dash-cont">
        <div className="dash-left">
          <Sidebar />
        </div>
        <i className="fa fa-bars barsIcon" onClick={handleClick}></i>
        <div className="dash-right">
          <Navbar />
          <div className="addcoursetop">
            <h3>Add New Course</h3>
          </div>
          <div className="addcoursetop2">
            <div className="addcoursetop2l">
              <div className="addtop2cont1">
                <input className="inp" type="text" placeholder="Add Title" />
              </div>
              <div className="addtop2cont2">
                <div className="addtop2cont2itm">
                  <i class="fa-sharp fa-regular fa-image"></i>
                  <p>Add Media</p>
                </div>
                <div className="addtop2cont2itm2">
                  <i class="fa-sharp fa-solid fa-calendar-days"></i>
                  <p>Add Media</p>
                </div>
                <div className="addtop2cont2itm2">
                  <i class="fa-regular fa-clock"></i>
                  <p>Add Media</p>
                </div>
              </div>
              <div className="addtop2cont3">
                <textarea placeholder=""> Paragraph </textarea>
              </div>
              <div className="addtop2cont4">
                  <button>Add</button>
              </div>
            </div>
            <div className="addcoursetop2r">
              <div className="addrighttopcont1">
                <div className="addrighttopcont2">
                  <h3>Publish</h3>
                </div>
                <div className="addrighttopcont3">
                  <div className="addrighttopcont3itm">
                    <button>Save Draft</button>
                    <button>Publish</button>
                  </div>
                  <div className="addrighttopcont3itm">
                    <p>Status: Draft</p>
                    <p><u>Edit</u></p>
                  </div>
                  <div className="addrighttopcont3itm">
                    <p>Visibility: Public</p>
                    <p><u>Edit</u></p>
                  </div>
                  <div className="addrighttopcont3itm">
                    <p>Publish: Immediately</p>
                    <p><u>Edit</u></p>
                  </div>
                  <div className="addrighttopcont3btn">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddScreen;
