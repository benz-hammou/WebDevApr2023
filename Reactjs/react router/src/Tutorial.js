import { Alert, Button, ButtonGroup, Container, Modal, Accordion } from 'react-bootstrap'
import { useState } from 'react';

const Tutorial = () => {

  const [show, setShow] = useState(false);
  const handleChange = () => setShow(!show);

  return (
    <Container>

      <Alert variant='danger'>
        Hello Dude - Notification
      </Alert>
      <Button variant="primary" className='mb-2' onClick={handleChange}>
        Launch demo modal
      </Button>
      <br />
      <ButtonGroup>
        <Button >First</Button>
        <Button variant='dark' className='mx-1'>Seconde</Button>
        <Button>Third</Button>
      </ButtonGroup>

      <Modal show={show} onHide={handleChange}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleChange}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Accordion defaultActiveKey="0" className='mt-2'>
        <Accordion.Item eventKey="0">
          <Accordion.Header  >Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </Container>
  )
}

export default Tutorial