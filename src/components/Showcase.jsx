import { Container, Row } from 'react-bootstrap';
import ShowcaseCard from './ShowcaseCard';

function Showcase({showcaseTitle, projects}) {
    return (
        <Container>
            <Row className="py-2">
                <h2 className="text-center fw-bold">{showcaseTitle.title}</h2>
            </Row>
            <Row className='d-flex flex-row justify-content-center gap-2'>
                {projects.map((project, index) => (
                    <ShowcaseCard key={index} projectDetails={project} />
                ))}
            </Row>
        </Container>
    );
};

export default Showcase;