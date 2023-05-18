/** @format */

import { Modal   , Table} from "react-bootstrap";

export function EnrolledWebinar(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton className="EnrolledModal">
        <Modal.Title id="contained-modal-title-vcenter"  >
        Enrolled Webinars
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                    <td>Borem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et <br /> velit interdum, ac aliquet odio mattis.</td>
                    <td>05.06.2023</td>
                    <td>30</td>
                </tr>
            </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
