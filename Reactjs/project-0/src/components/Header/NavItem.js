import {Nav} from 'react-bootstrap'
const NavItem = ({children,link}) => {
    return (
        <Nav className="">
        <Nav.Item>
            <Nav.Link href={link}>{children}</Nav.Link>
        </Nav.Item>
        </Nav>
    )
}
export default NavItem