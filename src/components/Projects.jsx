import ProjectCard from "./ProjectCard"

function Projects()
{
    return (
        <div className="row mb-5" data-aos="fade-up">
            <div className="col-lg-12 mb-3 mx-auto text-center">
                <h3 className="mb-3">Projects & Work</h3>
            </div>

            <ProjectCard
                project_name="MP3Builder"
                project_image="mp3builder.jpg"
                project_description="A free and open-source tool for customizing MP3 tags and metadata."
                project_demo="true"
                project_link="https://mp3builder.net"
                open_source="true"
                github_link="https://github.com/kiduswb/mp3builder"
                tech_stack="React, NodeJS, Express, S3 SDK"
            />

            <ProjectCard
                project_name="OpenByte Hosting"
                project_image="openbyte.jpg"
                project_description="A free and open-source web hosting platform powered by iFastNet infrastructure."
                project_demo="true"
                project_link="https://openbytehosting.com"
                open_source="true"
                github_link="https://github.com/kiduswb/openbyte"
                tech_stack="PHP, MySQL, HTMX"
            />

            <ProjectCard
                project_name="Addis Capital"
                project_image="addiscapital.jpg"
                project_description="A property listings website for a real estate company."
                project_demo="true"
                project_link="https://addis.capital"
                tech_stack="PHP, MySQL"
            />

            <ProjectCard
                project_name="EOTC of Brandon, MB"
                project_image="eotcbrandon.jpg"
                project_description="Website for the Ethiopian Orthodox Tewahdo Church of Brandon, Manitoba."
                project_demo="true"
                project_link="https://eotcbrandon.ca"
                tech_stack="HTML, CSS, JavaScript"
            />

            <ProjectCard
                project_name="Flora Agricultural Estate"
                project_image="floraagri.jpg"
                project_description="A website for a landscaping and agro-consulting company based in Addis Ababa, Ethiopia."
                project_demo="true"
                project_link="https://floraagri.com"
                tech_stack="HTML, CSS, JavaScript"
            />

        </div>
    )
}

export default Projects;