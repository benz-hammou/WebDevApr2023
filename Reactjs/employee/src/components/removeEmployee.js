import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const RemoveEmployee = ({ handleClose, deleteEmployee }) => {
 
 
  return (
    <>
      <Modal.Footer className="d-flex justify-content-between">
      <Modal.Title>The employee will be deleted, are you sure ?</Modal.Title>
      <div>
        <Button className="me-2" variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={deleteEmployee}>
          Confirm
        </Button>
        </div>
      </Modal.Footer>
    </>
  );
};

export default RemoveEmployee;
