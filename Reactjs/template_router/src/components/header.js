import NavbarMenu from "./navbar"
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
      <Navbar bg="success" expand="lg">
        <NavbarMenu />
      </Navbar>
    </div>
  )
}

export default Header