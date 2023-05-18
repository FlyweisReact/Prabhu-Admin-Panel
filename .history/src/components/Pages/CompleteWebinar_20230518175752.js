/** @format */

import React, { useState } from "react";
import HOC from "../Layout/HOC";
import Navbar from "../navbar";
import img from "../../Images2/Group.png";
import { Table } from "react-bootstrap";

const CompleteWebinar = () => {
    const [ modalShow , setModalShow ] = useState(false)

    
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  


  return (
    <>
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
