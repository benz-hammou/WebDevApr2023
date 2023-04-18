import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';


const Navigation = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/blog">Blog</Navbar.Brand>
          <Navbar.Brand href="/contact">Contact</Navbar.Brand>
          <Navbar.Brand href="/about">About</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation