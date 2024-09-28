import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaFileAlt } from 'react-icons/fa';

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
                            href="https://www.dropbox.com/scl/fi/ip59z7c8j22nuc2coh2t8/KidusResume.pdf?rlkey=8emxdy1vvlxp2emo3y2zent97&st=jjxykk0n&dl=0" 
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