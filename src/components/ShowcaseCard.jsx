import { Card, Button, Col } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';

function ShowcaseCard({projectDetails}) {
    return (
        <Col lg={4} className="p-3">
            <Card className="border-0 rounded-0 shadow">
                <Card.Img 
                    variant="top" 
                    src={projectDetails.image} 
                    alt={projectDetails.name}
                    className="img-fluid" 
                />
                <Card.Body>
                    <Card.Title>{projectDetails.name}</Card.Title>
                    <Card.Text>
                        {projectDetails.description}
                    </Card.Text>
                    <Button 
                        variant="outline-dark" 
                        className="rounded-0" 
                        href={projectDetails.weblink} 
                        target="_blank"
                    >
                        <FaGlobe />&nbsp; View Project
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ShowcaseCard;