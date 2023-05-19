
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';


 export function MobileSidebar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const location = useLocation();
  
    const data = [
      {
        name: "DashBoard",
        link: "/dashboard",
        icon: <i className="fa-solid fa-qrcode"></i>,
      },
      {
        name: "My Profile",
        link: "/profile",
        icon: <i className="fa-solid fa-user"></i>,
      },
      {
        name: "Suggest Webinar topics",
        link: "/webinar-topic",
        icon: <i className="fa-solid fa-file-pen"></i>,
      },
      {
        name: "Manage Webinar",
        link: "/manage-webinar",
        icon: <i className="fa-solid fa-cubes"></i>,
      },
      {
        name: "Completed Webinar",
        link: "/complete-webinar",
        icon: <i className="fa-solid fa-table-list"></i>,
      },
      {
        name: "Payment Details",
        link: "/payment-details",
        icon: <i className="fa-solid fa-credit-card"></i>,
      },
      {
        name: "Review & Questionnaire",
        link: "/review",
        icon: <i className="fa-solid fa-rss"></i>,
      },
    ];
  
  
    
    function LogOut () { 
      Store.addNotification({
        title: "Logged Out",
        message : "" ,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1500,
          onScreen: true
        }
      });
      navigate('/')
    }
  
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