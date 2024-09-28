import {Col, Container, Row} from "react-bootstrap"

function FooterNav() {
    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col lg="12" className="text-center py-3">
                        <p>&copy; 2024 - Kidus Bewket</p>
                    </Col>
                </Row>    
            </Container>    
        </div>
    )
}

export default FooterNav;