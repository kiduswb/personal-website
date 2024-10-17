import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaFileAlt } from 'react-icons/fa';
import { FaFileArrowDown } from 'react-icons/fa6';

//!TODO: Add Resume Link

function Hero() {
    return (

        <Container className="hero">
            <Row className="py-5">
                <Col lg={6} className="mx-auto">
                    <h1>Hello! I'm Kidus. 👋🏾</h1>
                    <p className="lead">
                        I'm a software developer pursuing a career in Tech & IT.
                    </p>
                    <div>
                        <Button 
                            variant="dark" 
                            className="rounded-0 me-1 btn-sm" 
                            href="mailto:mail@kidus.ca"
                        >
                            <FaEnvelope />&nbsp; mail@kidus.ca
                        </Button>
                        <Button 
                            variant="dark" 
                            className="rounded-0 me-1 btn-sm" 
                            href="https://github.com/kiduswb" 
                            target="_blank"
                            rel='noopener'
                        >
                            <FaGithub />&nbsp; kiduswb
                        </Button>
                        <Button 
                            variant="dark" 
                            className="rounded-0 me-1 btn-sm" 
                            href="javascript:void();"
                            target='_blank'
                            rel='noopener'
                        >
                            <FaFileArrowDown />&nbsp; resume.pdf
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    
    )
}

export default Hero;