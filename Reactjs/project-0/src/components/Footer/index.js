import { Col, Row } from "react-bootstrap";

export default function Footer(){
    return(
        <div className="bg-dark text-light footer">
                <Row className="justify-content-center text-center footer p-0 m-0">
                    <Col md={4}>
                        Footer col-1
                    </Col>
                    <Col md={4}>
                        Footer col-2
                    </Col>
                    <Col md={4}>
                        Footer col-3
                    </Col>
                </Row>
        </div>
    )
}