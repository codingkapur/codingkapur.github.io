const FullStackProjects = ({ fullstackProjects }) => {
  return (
    <div className="projects__frontend--container projects__category--container">
      <p className="category__title">
        END TO END SOLUTIONS.
      </p>
      <div className="projects">
        {fullstackProjects.map((project, index) => {
          return (
            //Indiividual Project
            <a
              href={project.deploymentURL}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              <div key={index} className="individual__project">
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
export default FullStackProjects;
