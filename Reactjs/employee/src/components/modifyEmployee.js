import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";

const ModifyEmployee = ({
  modifyHandleShow,
  modifyHandleClose,
  modifyShow,
}) => {

  return (
    <>
      <Modal show={modifyShow} onHide={modifyHandleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modify Employee</Modal.Title>
        </Modal.Header>

       

        <Modal.Footer>
          <Button variant="secondary" onClick={modifyHandleClose}>
            Close
          </Button>
          <Button variant="success" onClick={modifyHandleShow}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModifyEmployee;

//event.taget.id
