import ProjectCard from "./ProjectCard"

function Projects()
{
    return (
        <div className="row mb-5" data-aos="fade-up">
            <div className="col-lg-12 mb-3 mx-auto text-center">
                <h3>Projects & Work</h3>
            </div>

            <ProjectCard
                project_name="OpenByte Hosting"
                project_image="openbyte.jpg"
                project_description="A free and open-source web hosting platform powered by iFastNet infrastructure."
                project_demo="true"
                project_link="https://openbytehosting.com"
                open_source="true"
                github_link="https://github.com/kiduswb/openbyte"
                tech_stack="PHP, MySQL, htmx, Bootstrap, MOFH-API"
            />

            <ProjectCard
                project_name="The KANE Project"
                project_image="kaneproject.jpg"
                project_description="Capstone project for college — a real estate listings service for newcomers."
                project_demo="true"
                project_link="https://kaneproject.ca"
                open_source="true"
                github_link="https://github.com/kane-project"
                tech_stack="PHP, MySQL, Bootstrap, AWS"
            />

            <ProjectCard
                project_name="Flora Agricultural Estate"
                project_image="floraagri.jpg"
                project_description="A website for a landscaping and agro-consulting company based in Addis Ababa."
                project_demo="true"
                project_link="https://floraagri.com"
                tech_stack="PHP, MySQL, Bootstrap"
            />

            <ProjectCard
                project_name="EOTC of Brandon, MB"
                project_image="eotcbrandon.jpg"
                project_description="The official website for the Ethiopian Orthodox Tewahdo Church of Brandon, Manitoba."
                project_demo="true"
                project_link="https://eotcbrandon.ca"
                tech_stack="PHP, MySQL, Bootstrap"
            />

            <ProjectCard
                project_name="Addis Capital"
                project_image="addiscapital.jpg"
                project_description="A website and custom internal tools for a real estate agency based in Dubai."
                project_demo="true"
                project_link="https://addis.capital"
                tech_stack="PHP, MySQL, Bootstrap"
            />
        
        </div>
    )
}

export default Projects;