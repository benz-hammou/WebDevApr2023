import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";

const AddEmployee = ({
  onValChange,
  formObject,
  onFormSubmit,
  show,
  handleClose,
  handleShow,
}) => {
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
                  <label for="inputEmail4" className="form-label">
                    Fullname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fullname"
                    onChange={onValChange}
                    value={formObject.fullname}
                    name="fullname"
                    id="FullName"
                  />
                </Col>

                <Col md={6}>
                  <label for="inputPassword4" className="form-label">
                    Profession
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Profession"
                    onChange={onValChange}
                    value={formObject.profession}
                    name="profession"
                    id="Profession"
                  />
                </Col>

                <Col md={6}>
                  <label for="inputState" className="form-label">
                    Gender
                  </label>
                  <select
                    onChange={onValChange}
                    value={formObject.gender}
                    name="gender"
                    id="Gender"
                    className="form-select"
                  >
                    <option selected>Select you gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </Col>

                <Col md={6}>
                  <label for="inputAddress2" className="form-label">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nationality"
                    onChange={onValChange}
                    value={formObject.nationality}
                    name="nationality"
                    id="Nationality"
                  />
                </Col>

                <Col md={12}>
                  <label for="inputAddress2" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, studio, or floor"
                    onChange={onValChange}
                    value={formObject.address}
                    name="address"
                    id="Address"
                  />
                </Col>

                <Col md={4}>
                  <label for="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    onChange={onValChange}
                    value={formObject.city}
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
                    onChange={onValChange}
                    value={formObject.phone}
                    name="phone"
                    id="Phone"
                  />
                </Col>

                <Col md={4}>
                  <label for="inputZip" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={onValChange}
                    value={formObject.email}
                    name="email"
                    id="Email"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEmployee;
