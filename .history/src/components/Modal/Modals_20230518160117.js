/** @format */

import { Modal, Table } from "react-bootstrap";

export function EnrolledWebinar(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="EnrolledModal">
        <Modal.Title id="contained-modal-title-vcenter">
          Enrolled Webinars
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "0px" }}>
        <Table className="EnrolledTable">
          <thead>
            <tr>
              <th>Webinar title</th>
              <th>Description</th>
              <th>Live Date</th>
              <th>No. of Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cross Industry</td>
              <td className="desc">
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et  velit interdum, ac aliquet odio
                mattis.
              </td>
              <td>05.06.2023</td>
              <td>30</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}
