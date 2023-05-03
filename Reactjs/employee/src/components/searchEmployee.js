import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function SearchEmployee({
  searchShow,
  searchHandleShow,
  searchHandleClose,
  tableData,
  setSearchResult,
}) {
  const handleFilter = (e) => {
    const input = e.target.value;
    const filteredData = tableData.filter((data) =>
      data.fullname.includes(input)
    );
    setSearchResult(filteredData)
  };

  return (
    <>
      <Button variant="primary" onClick={searchHandleShow}>
      Search Employee
      </Button>

      <Modal show={searchShow} onHide={searchHandleClose}>
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
          <Button variant="secondary" onClick={searchHandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={searchHandleClose}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchEmployee;
