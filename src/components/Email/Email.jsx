import React, {  useState } from "react";
import './Email.css'

import { Modal, Button } from "react-bootstrap";
import { FormGroup, ControlLabel,  FormControl } from 'react-bootstrap'
import Massege from "./Massage/Massege";

export default function Email() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeShow=()=>{
      setShow(!show)
  }

  return (
    <>
      <Button className="button" variant="outline-info" onClick={handleShow}>
        Leave a message 
      </Button>

      <Modal show={show} onHide={handleClose}>
       
        <Modal.Header closeButton>
          <Modal.Title>Leave a message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Massege changeShow={changeShow} />
        </Modal.Body>
      </Modal>
    </>
  );
}
