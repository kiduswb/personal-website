import { Container, Row } from 'react-bootstrap';
import ShowcaseCard from './ShowcaseCard';

function Showcase({showcaseTitle, projects}) {
    return (
        <Container>
            <Row className="py-5">
                <h2 className="text-center">{showcaseTitle.title}</h2>
            </Row>
            <Row>
                {projects.map((project, index) => (
                    <ShowcaseCard key={index} projectDetails={project} />
                ))}
            </Row>
        </Container>
    );
};

export default Showcase;