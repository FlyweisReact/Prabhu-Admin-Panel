/** @format */

import React, { useState } from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import { Table, Modal } from "react-bootstrap";
import img from ".././../Images/Edit.png";

const ManageWebinar = () => {
  const [modalShow, setModalShow] = useState(false);

  function RescheduleEvent(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Resch
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <RescheduleEvent show={modalShow} onHide={() => setModalShow(false)} />

      <Navbar />
      <div className="two-sec-head-2">
        <div className="left">
          <p>Manage Webinar</p>
        </div>

        <div className="right">
          <p className="specialText" onClick={() => setModalShow(true)}>
            Rescheduled Event
          </p>
          <button className="addbtn">
            <i className="fa-solid fa-plus"></i>Add New Webinar
          </button>
          <div className="filter">
            <i class="fa-solid fa-filter"></i>
            <p>Filter</p>
          </div>
        </div>
      </div>

      <div className="mainTable2">
        <div className="ColorTable-head-2">
          <p>Manage Webinars</p>
        </div>
        <Table className="ColorTable-2">
          <thead>
            <tr>
              <th>Webinar Titles</th>
              <th> Description </th>
              <th> Date </th>
              <th> Time </th>
              <th> Status </th>
              <th> Edit </th>
            </tr>
          </thead>
          <tbody>
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
