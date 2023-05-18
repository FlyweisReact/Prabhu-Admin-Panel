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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Enrolled Webinars
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table>
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
                    <td>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
