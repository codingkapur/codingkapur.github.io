import FullStackProjects from "./FullStackProjects";
import FrontendProjects from "./FrontendProjects";
import DataFetchProjects from "./DataFetchProjects";
const Projects = ({ fullstackProjects, frontendProjects, dataFetchProjects }) => {
  return (
    <div className="projects__container">
      {fullstackProjects.length > 0 ? (
        <FullStackProjects fullstackProjects={fullstackProjects} />
      ) : null}
      {dataFetchProjects.length > 0 ? (
        <DataFetchProjects dataFetchProjects={dataFetchProjects} />
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
