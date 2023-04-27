import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SearchEmployee({searchShow, searchHandleShow, setSearchShow, searchHandleClose,tableData,searchResult, setSearchResult }) {

  const handleFilter = (e) => {
    const input = e.target.value
    const filteredData = tableData.filter(data => data.fullname.includes(input))
    setSearchResult(filteredData)
    }

    
  return (
    <>
        <Button variant="primary" onClick={searchHandleShow}>
        Launch demo modal
      </Button>

      <Modal show={searchShow} onHide={searchHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              onChange={handleFilter}
                type="text"
                placeholder="tape somoine"
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchEmployee;
