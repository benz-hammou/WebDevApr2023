import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const RemoveEmployee = ({ handleClose, deleteEmployee }) => {
  return (
    <>
      <Modal.Footer>
      <Modal.Title>Employee with ID: 67 will be deleted, are you sure ?</Modal.Title>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={deleteEmployee}>
          Confirm
        </Button>
      </Modal.Footer>
    </>
  );
};

export default RemoveEmployee;
