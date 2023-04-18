import {
    Navbar, Nav, Container
} from 'react-bootstrap'
import NavItem from './NavItem'
import Logo from './Logo'
export default function MainNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="position-fixed w-100 top-0 z-index-dropdown">
            <Container>
                <Logo slogan={'MarketPlace'}/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavItem link={'/'}>Home</NavItem>
                    <NavItem link={'/'}>Home</NavItem>

                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}