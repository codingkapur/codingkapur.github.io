import "./Work.css";
import Loading from "./Loading";
import Projects from "./work-components/Projects";
import { useEffect, useState } from "react";

const Work = () => {
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);

  const fetchProjectData = async () => {
    setLoading(true);
    const res = await fetch(
      "https://raghavkapur-contact-default-rtdb.firebaseio.com/projectsData.json"
    );
    const data = await res.json();
    let projects = [];
    Object.entries(data).forEach(([key, value]) => {
      projects.push(value);
    });
    return projects;
  };

  useEffect(() => {
    const updateProjects = async () => {
      const res = await fetchProjectData();
      setProjectData(res);
      setLoading(false);
    };
    updateProjects();
  }, []);

  let frontendProjects = [];
  let fullstackProjects = [];
  frontendProjects = projectData.filter(
    (project) => project.type === "Frontend"
  );
  fullstackProjects = projectData.filter(
    (project) => project.type === "Full Stack"
  );

  return (
    <div className="page__container work__page--container">
      {loading ? (
        <Loading />
      ) : (
        <Projects
          frontendProjects={frontendProjects}
          fullstackProjects={fullstackProjects}
        />
      )}
    </div>
  );
};

export default Work;
