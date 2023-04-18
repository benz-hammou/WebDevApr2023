import {Navbar} from 'react-bootstrap'
export default function Logo({slogan}){
    return(
        <Navbar.Brand href="#home">{slogan}</Navbar.Brand>
    )
}