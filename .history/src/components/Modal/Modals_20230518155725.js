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
                </tr>
            </thead>
        </Table>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
