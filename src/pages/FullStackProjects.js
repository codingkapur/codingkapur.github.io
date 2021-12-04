import { useGlobalContext } from "../context";
const FullStackProjects = () => {
  const { fullStackProjects } = useGlobalContext();
  return (
    <div className="projects__frontend--container projects__category--container">
      <p className="category__title">Full Stack Projects</p>
      <div className="projects">
        {fullStackProjects.map((project, index) => {
          return (
            //Indiividual Project
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
          );
        })}
      </div>
    </div>
  );
};
export default FullStackProjects;
