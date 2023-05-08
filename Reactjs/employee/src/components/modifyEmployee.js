import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";

const ModifyEmployee = ({
  tableData,
  setTableData,
  modifyHandleShow,
  modifyHandleClose,
  modifyShow,
}) => {
  /* const [modify, setModify] = useState({
    value: tableData,
    isEditing: false,
  }); */

  return (
    <>

      <Modal show={modifyShow} onHide={modifyHandleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modify Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-6">
              <Row>
                <Col md={6}>
                  <label htmlFor="inputEmail4" className="form-label">
                    Fullname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fullname"
                    // onChange={onValChange}
                    // defaultValue={formObject.fullname}
                    name="fullname"
                    id="FullName"
                  />
                </Col>

                <Col md={6}>
                  <label htmlFor="inputPassword4" className="form-label">
                    Profession
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Profession"
                    // onChange={onValChange}
                    // defaultValue={formObject.profession}
                    name="profession"
                    id="Profession"
                  />
                </Col>

                <Col md={6}>
                  <label htmlFor="inputState" className="form-label">
                    Gender
                  </label>
                  <select
                    // onChange={onValChange}
                    // defaultValue={formObject.gender}
                    name="gender"
                    id="Gender"
                    className="form-select"
                  >
                    <option selected>Select you gender</option>
                    <option defaultValue="Male">Male</option>
                    <option defaultValue="Female">Female</option>
                  </select>
                </Col>

                <Col md={6}>
                  <label htmlFor="inputAddress2" className="form-label">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nationality"
                    // onChange={onValChange}
                    // defaultValue={formObject.nationality}
                    name="nationality"
                    id="Nationality"
                  />
                </Col>

                <Col md={12}>
                  <label htmlFor="inputAddress2" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, studio, or floor"
                    // onChange={onValChange}
                    // defaultValue={formObject.address}
                    name="address"
                    id="Address"
                  />
                </Col>

                <Col md={4}>
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    // onChange={onValChange}
                    // defaultValue={formObject.city}
                    name="city"
                    id="City"
                  />
                </Col>

                <Col md={4}>
                  <label className="form-label">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    // onChange={onValChange}
                    // defaultValue={formObject.phone}
                    name="phone"
                    id="Phone"
                  />
                </Col>

                <Col md={4}>
                  <label htmlFor="inputZip" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    // onChange={onValChange}
                    // defaultValue={formObject.email}
                    name="email"
                    id="Email"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>

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
