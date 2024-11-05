// ProjectCard.jsx

function ProjectCard(props)
{
    const tech = props.tech_stack.split(',').map(item => item.trim());

    return (
        <div className="col-lg-4 mb-3">
            <div className="card bg-transparent rounded-0 border-0">
                <img src={'/project-images/' + props.project_image} class="card-img-top" alt={props.project_name} />
                <div className="card-body p-3 text-huwhite">
                    <h4 className="card-title">{props.project_name}</h4>
                    <div className="d-flex gap-1 py-2">
                        {tech.map((tech, index) => (
                        <div key={index} className="badge bg-dark rounded-0">
                            {tech}
                        </div>
                        ))}
                    </div>
                    <p>{props.project_description}</p>
                    <div className="d-flex flex-row gap-1">
                        {
                            props.project_demo ? 
                            <>
                                <a href={props.project_link} target="_blank" rel="noopener" className="btn btn-sm btn-huwhite rounded-0">
                                    <i className="me-1 fa fa-arrow-up-right-from-square"></i>
                                    Live Project
                                </a>
                            </>

                            :

                            <>
                            </>
                        }

                        {
                            props.open_source ?
                            <>
                                <a href={props.github_link} target="_blank" rel="noopener" className="btn btn-sm btn-huwhite rounded-0">
                                    <i className="me-1 fab fa-github"></i>
                                    GitHub Repo
                                </a>
                            </>

                            :

                            <>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;