import { Button, Card, Col, Row } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Row className="my-4">
                <Col md={3}>
                    <Row>
                        <Col md={12}>
                            <h1 className="lead">React.js Portfolio Project</h1>
                            <Button variant="primary">Go to Project</Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={9}>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                    </p>
                </Col>
            </Row>

            <img src="https://picsum.photos/500/200" alt="random" className="img-fluid w-100" />
            <Row className="my-4 justify-content-center">
                {[
                    'Danger',
                    'Warning',
                    'Dark',
                ].map((variant) => (
                    <Col md={4} key={variant}>
                        <Card
                            bg={variant.toLowerCase()}

                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            className="mb-2"
                        >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>{variant} Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}