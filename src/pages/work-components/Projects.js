import FullStackProjects from "./FullStackProjects";
import FrontendProjects from "./FrontendProjects";

const Projects = ({ fullstackProjects, frontendProjects }) => {
  return (
    <div className="projects__container">
      {fullstackProjects.length > 0 ? (
        <FullStackProjects fullstackProjects={fullstackProjects} />
      ) : null}
      {frontendProjects.length > 0 ? (
        <FrontendProjects frontendProjects={frontendProjects} />
      ) : null}
      {/* <FullStackProjects fullstackProjects={fullstackProjects}/> */}
      {/* <FrontendProjects frontendProjects={frontendProjects}/> */}
    </div>
  );
};
export default Projects;
