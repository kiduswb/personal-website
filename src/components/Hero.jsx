import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaFileAlt } from 'react-icons/fa';

//!TODO: Add Resume Link

function Hero() {
    return (

        <Container className="hero">
            <Row className="py-5">
                <Col lg={6} className="mx-auto">
                    <h1>Hi, I'm Kidus.</h1>
                    <p className="lead">
                        I'm a software developer & IT professional with practical experience developing real world applications.
                    </p>
                    <div>
                        <Button 
                            variant="outline-dark" 
                            className="rounded-0 me-2" 
                            href="mailto:mail@kidus.ca"
                        >
                            <FaEnvelope />&nbsp; Email
                        </Button>
                        <Button 
                            variant="outline-dark" 
                            className="rounded-0 me-2" 
                            href="https://github.com/kiduswb" 
                            target="_blank"
                        >
                            <FaGithub />&nbsp; GitHub
                        </Button>
                        <Button 
                            variant="outline-dark" 
                            className="rounded-0" 
                            href="javascript:void();" 
                            target="_blank"
                        >
                            <FaFileAlt />&nbsp; My Resume
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    
    )
}

export default Hero;