/** @format */

import React, { useState } from "react";
import HOC from "../Layout/HOC";
import { Table, Modal, Form } from "react-bootstrap";
import img from ".././../Images/Edit.png";
import { Store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

const ManageWebinar = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  function RescheduleEvent(props) {
    const postHandler = async () => {
      try {
        Store.addNotification({
          title: "Created",
          message: "Rescheduled Event ",
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
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reschedule Event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Webinar Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Live Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <button
              className="submit-btn"
              type="button"
              onClick={() => postHandler()}
            >
              Save
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <RescheduleEvent show={modalShow} onHide={() => setModalShow(false)} />
      <div className="two-sec-head-2">
        <div className="left">
          <p>Speaker</p>
        </div>

        <div
          className="right"
          style={{ justifyContent: "flex-end", gap: "20px" }}
        >
          <button className="addbtn" onClick={() => navigate("/add")}>
            <i className="fa-solid fa-plus"></i>Add New Speaker
          </button>
          <div className="filter">
            <i class="fa-solid fa-filter"></i>
            <p>Filter</p>
          </div>
        </div>
      </div>

      <div className="mainTable">
        <div className="ColorTable-head">
          <p>Speaker</p>
        </div>
        <Table className="ColorTable">
          <thead>
            <tr>
              <th>Speaker Name</th>
              <th> Email </th>
              <th> Contact Number </th>
              <th> Contract </th>
              <th> Chat </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span
                  style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent :'center' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                    alt="ProfileImage"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "100%",
                    }}
                  />
                  <span>Alen Maria</span>
                </span>
              </td>
              <td>
              Alen9966@gamil.com
              </td>
              <td> 9999999999</td>
            
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#F31111" }}>Pending</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#F31111" }}>Pending</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#F31111" }}>Pending</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#F31111" }}>Pending</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td> 05.05.2023</td>
              <td> 04:00 AM IST</td>
              <td style={{ color: "#2CAD0C" }}>Reviewed</td>
              <td>
                <img src={img} alt="" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(ManageWebinar);
