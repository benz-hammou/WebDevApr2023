import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const RemoveEmployee = ({ handleClose, deleteEmployee }) => {
  return (
    <>
      t'est sur ?
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={deleteEmployee}>
          Confirm
        </Button>
      </Modal.Footer>
    </>
  );
};

export default RemoveEmployee;
