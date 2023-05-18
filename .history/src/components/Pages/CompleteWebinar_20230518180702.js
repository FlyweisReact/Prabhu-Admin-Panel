/** @format */

import React, { useState } from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import img from "../../Images2/Group.png";
import { Table, Modal } from "react-bootstrap";
import { Store } from "react-notifications-component";

const CompleteWebinar = () => {
  const [modalShow, setModalShow] = useState(false);

  function UploadInvoice(props) {
    function uploadImage() {
      const target = document.getElementById("inputFile");
      target.click();
    }

    const UploadInvoice = async () => {
        try{
            Store.addNotification({
                title: "Uploaded",
                message: "Invoice Uploaded ",
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
        }catch(e) { 
            console.log(e)
        }
    }

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Upload Invoice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="file"
            id="inputFile"
            style={{display : 'none'}}
          />
          <img
            src={img}
            alt=""
            style={{ display: "block", margin: "auto", cursor: "pointer" }}
            onClick={() => uploadImage()}
          />
          <button className="submit-btn">Submit</button>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <UploadInvoice show={modalShow} onHide={() => setModalShow(false)} />
      <Navbar />

      <div className="two-sec-head-2">
        <div className="left">
          <p>Completed Webinar</p>
        </div>
      </div>

      <div className="mainTable2">
        <div className="ColorTable-head-2">
          <p>Completed Webinars</p>
        </div>
        <Table className="ColorTable-2">
          <thead>
            <tr>
              <th>Webinar Titles</th>
              <th> Live Date </th>
              <th> Payment Due Date </th>
              <th> Presenter Certificate </th>
              <th> Speaker Payment </th>
              <th> Request Payment </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button
                  className="cover-btn"
                  onClick={() => setModalShow(true)}
                >
                  Upload invoice
                </button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
            <tr>
              <td>Cross Industry</td>
              <td>05.05.2023</td>
              <td> 11.05.2023</td>
              <td>
                <img src={img} alt="" />
              </td>
              <td>
                <button>$ 150</button>
              </td>
              <td>
                <button className="cover-btn">Upload invoice</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(CompleteWebinar);
