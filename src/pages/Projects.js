import "./Projects.css";
import { useGlobalContext } from "../context";
import FrontendProjects from "./FrontendProjects";
import FullStackProjects from "./FullStackProjects";
const Projects = () => {
  const { frontendProjects, fullStackProjects } = useGlobalContext();
  return (
    <div className="projects__container">
      {fullStackProjects.length > 0 ? <FullStackProjects /> : null}
      {frontendProjects.length > 0 ? <FrontendProjects /> : null}
    </div>
  );
};

export default Projects;
