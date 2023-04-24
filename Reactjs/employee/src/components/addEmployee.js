import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";

const AddEmployee = ({  }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>





      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-6">
              <Row>
                <Col md={6}>
                  <label for="inputEmail4" class="form-label">
                    FullName
                  </label>
                  <input type="text" class="form-control" id="FullName" />
                </Col>
                <Col md={6}>
                  <label for="inputPassword4" class="form-label">
                    Profession
                  </label>
                  <input type="text" class="form-control" id="Profession" />
                </Col>
                <Col md={6}>
                  <label for="inputState" class="form-label">
                    Gender
                  </label>
                  <select id="gender" class="form-select">
                    <option selected>Male</option>
                    <option>Female</option>
                  </select>
                </Col>
                <Col md={6}>
                  <label for="inputAddress2" class="form-label">
                    Nationality
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Nationality"
                    placeholder="Nationality"
                  />
                </Col>
                <Col md={12}>
                  <label for="inputAddress2" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Address"
                    placeholder="Apartment, studio, or floor"
                  />
                </Col>
                <Col md={4}>
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input type="text" class="form-control" id="City" />
                </Col>

                <Col md={4}>
                  <label for="inputZip" class="form-label">
                    Phone
                  </label>
                  <input type="number" class="form-control" id="Phone" />
                </Col>
                <Col md={4}>
                  <label for="inputZip" class="form-label">
                    Email
                  </label>
                  <input type="email" class="form-control" id="Email" />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 
      <div
        className="modal fade modal-xl"
        id="addEmployee"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Employee
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    FullName
                  </label>
                  <input type="text" className="form-control" id="FullName" />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Profession
                  </label>
                  <input type="text" className="form-control" id="Profession" />
                </div>
                <div className="col-6">
                  <label for="inputState" className="form-label">
                    Gender
                  </label>
                  <select id="gender" className="form-select">
                    <option selected>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-6">
                  <label for="inputAddress2" className="form-label">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Nationality"
                    placeholder="Nationality"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="col-md-4">
                  <label for="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="City" />
                </div>

                <div className="col-md-4">
                  <label for="inputZip" className="form-label">
                    Phone
                  </label>
                  <input type="number" className="form-control" id="Phone" />
                </div>
                <div className="col-md-4">
                  <label for="inputZip" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="Email" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-danger addEmployee">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade modal-lg"
        id="searchEmployee"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search Employee
              </h5>
              <button
                type="button"
                className="btn-close searchEmployee"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-9">
                  <label for="inputCity" className="form-label">
                    Search by Column
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-3">
                  <label for="inputState" className="form-label">
                    Select Column
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Fullname</option>
                    <option>Profession</option>
                    <option>Gender</option>
                    <option>Birthdate</option>
                    <option>Nationality</option>
                    <option>Address</option>
                    <option>Phone</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AddEmployee;
