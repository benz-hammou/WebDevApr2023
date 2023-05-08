import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function SearchEmployee({ handleClose, employees, setSearchResult }) {
  const handleFilter = (e) => {
    const input = e.target.value;
    const filteredData = employees.filter((employee) =>
      employee.fullname.toLowerCase().includes(input.toLowerCase())
    );
    setSearchResult(filteredData);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Search Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee fullname</Form.Label>
            <Form.Control
              onChange={handleFilter}
              type="text"
              placeholder="John Doe"
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
}

export default SearchEmployee;
