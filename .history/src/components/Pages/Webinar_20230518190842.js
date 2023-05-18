/** @format */

import React, { useState } from "react";
import HOC from "../Layout/HOC";
import Navbar from "../Layout/navbar";
import { Table, Modal, Form, FloatingLabel } from "react-bootstrap";
import { Store } from "react-notifications-component";

const Webinar = () => {
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    const AddWebinar = async () => {
      try {
        Store.addNotification({
          title: "Created",
          message: "Webinar Created ",
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
            Add Webinar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Webinar Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Webinar Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Form.Group>
            <button
              className="submit-btn"
              type="button"
              onClick={() => AddWebinar()}
            >
              Submit for Approval
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Navbar />

      <div className="two-sec-head">
        <p>Suggest Webinar Topic</p>
        <button onClick={() => setModalShow(true)}>
          <i className="fa-solid fa-plus"></i>Add Webinar Topic
        </button>
      </div>

      <div className="mainTable">
        <div className="ColorTable-head">
          <p>Suggest Webinar Topic</p>
        </div>
        <Table className="ColorTable">
          <thead>
            <tr>
              <th>Webinar</th>
              <th> Description </th>
              <th> Status </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "green" }}>Approved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "#F31111" }}>Disapproved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "green" }}>Approved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "#F31111" }}>Disapproved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "green" }}>Approved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "#F31111" }}>Disapproved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "green" }}>Approved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "#F31111" }}>Disapproved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "green" }}>Approved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "#F31111" }}>Disapproved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "green" }}>Approved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </td>
              <td style={{ color: "#F31111" }}>Disapproved</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Webinar);
