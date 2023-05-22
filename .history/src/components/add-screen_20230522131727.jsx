/** @format */

import HOC from "./Layout/HOC";
import { Store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

const AddScreen = () => {
  const navigate = useNavigate();

  const AddCourse = async () => {
    try {
      Store.addNotification({
        title: "New Course Created Successfully",
        message: "",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1500,
          onScreen: true,
        },
      });
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="dash-cont">
        <div className="dash-right">
          <div className="addcoursetop">
            <h3>Add New Course</h3>
          </div>
        </div>
      </div>

      <div className="textAre-div">
        
        
        <div className="left">
          <div className="addtop2cont1">
            <input className="inp" type="text" placeholder="Add Title" />
          </div>

          <div className="addtop2cont2">
            <div className="addtop2cont2itm" tabIndex={0}>
              <i className="fa-sharp fa-regular fa-image"></i>
              <p>Add Media</p>
            </div>

            <div className="addtop2cont2itm" tabIndex={0}>
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
              <p>Date </p>
            </div>
            <div className="addtop2cont2itm" tabIndex={0}>
              <i className="fa-regular fa-clock"></i>
              <p>Time</p>
            </div>
          </div>

          <div className="addtop2cont3">
            <textarea placeholder=""> Paragraph </textarea>
          </div>
          <div className="addtop2cont4">
            <button onClick={() => AddCourse()}>Add</button>
          </div>
        </div>

        <div className="right">
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
                  <p>
                    <u>Edit</u>
                  </p>
                </div>
                <div className="addrighttopcont3itm">
                  <p>Visibility: Public</p>
                  <p>
                    <u>Edit</u>
                  </p>
                </div>
                <div className="addrighttopcont3itm">
                  <p>Publish: Immediately</p>
                  <p>
                    <u>Edit</u>
                  </p>
                </div>
                <div className="addrighttopcont3btn">
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="addcoursetop2r"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <div className="addrighttopcont1">
              <div className="addrighttopcont2">
                <h3>Industries</h3>
              </div>
              <div className="addrighttopcont3">
                <p className="head">Industry</p>
                <p className="ulHead">Cross Industry</p>
                <div className="two">
                  <input type="checkbox" />
                  <p>HR Compliance</p>
                </div>
                <div className="two">
                  <input type="checkbox" />
                  <p>Quality Management</p>
                </div>
                <div className="two">
                  <input type="checkbox" />
                  <p>Risk Management</p>
                </div>
                <div className="two">
                  <input type="checkbox" />
                  <p>OSHA Compliance</p>
                </div>
              </div>
              <div className="addrighttopcont3">
                <p className="ulHead">Life Science</p>
                <div className="two">
                  <input type="checkbox" />
                  <p>Pharmaceutical </p>
                </div>
                <div className="two">
                  <input type="checkbox" />
                  <p>Medical Devices </p>
                </div>
                <div className="two">
                  <input type="checkbox" />
                  <p>Biotechnology </p>
                </div>
                <div className="two">
                  <input type="checkbox" />
                  <p>Food & Dietary </p>
                </div>
              </div>
              <div className="addrighttopcont3">
                <p className="head">+ Add New Industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(AddScreen);
