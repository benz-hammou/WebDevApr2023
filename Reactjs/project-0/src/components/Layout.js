import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./leftmenu";

export default function Layout({children}) {
    return (
        <>
            <Header />
            <Container className='my-3 p-0'>
                <Row className="">
                    <Col md={3} className="leftmenu">
                        <LeftMenu/>
                    </Col>
                    <Col md={9} className="">
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}