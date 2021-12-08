const DataFetchProjects = ({ dataFetchProjects }) => {
    return (
      <div className="projects__frontend--container projects__category--container">
        <p className="category__title">Real Time Data</p>
        <p className="category__subtitle">FULLY DYNAMIC</p>
  
        <div className="projects">
          {dataFetchProjects.map((project, index) => {
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
  export default DataFetchProjects;
  