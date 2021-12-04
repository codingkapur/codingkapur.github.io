import "./Work.css";
import Loading from "./Loading";
import Projects from "./Projects";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

const Work = () => {

  const {fetchProjectData, organizeProjects, loading} = useGlobalContext();
  
  useEffect(() => {
    fetchProjectData();
    organizeProjects();
  },[]);

  return (
    <div className="page__container work__page--container">
      {loading ? <Loading /> : <Projects />}
    </div>
  );
};

export default Work;
