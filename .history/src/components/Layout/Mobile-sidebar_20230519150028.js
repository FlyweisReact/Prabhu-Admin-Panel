
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';


 export function MobileSidebar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>    
      <i className="fa-solid fa-bars" onClick={handleShow} />

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }