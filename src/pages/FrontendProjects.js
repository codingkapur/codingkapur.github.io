import { useGlobalContext } from "../context";
const FrontendProjects = () => {
  const { frontendProjects } = useGlobalContext();
  return (
    <div className="projects__frontend--container projects__category--container">
      <p className="category__title">
        FIGMA DESIGNS TO FULLY RESPONSIVE WEBSITES
      </p>
      <div className="projects">
        {frontendProjects.map((project, index) => {
          return (
            //Indiividual Project
            <a href={project.deploymentURL} target="_blank" key = {index}>
              <div
                key={index}
                className="individual__project"
              >
                <p className="project__display--name">{project.projectName}</p>
                {/* ON HOVER */}
                <div className="project__display--hover">
                  <p className="project__display--description">
                    {project.description}
                  </p>
                  <p className="project__display--tech">Tech: {project.tech}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default FrontendProjects;
