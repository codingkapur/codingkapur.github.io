import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //State Values
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [activeOption, setActiveOption] = useState("1");
  const [mailFormOpen, setMailFormOpen] = useState(false);
  const [messageStatus, setMessageStatus] = useState(false);

  const [projectData, setProjectData] = useState([]);
  const [frontendProjects, setFrontendProjects] = useState([]);
  const [fullStackProjects, setFullStackProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjectData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://raghavkapur-contact-default-rtdb.firebaseio.com/projectsData.json"
      );
      const data = await res.json();
      if (data) {
        const projectsArray = [];
        for (const entry of Object.entries(data)) {
          projectsArray.push(entry[1]);
        }
        setProjectData([...projectsArray]);
      } else {
        console.log("Unable to load projects at the moment");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const organizeProjects = () => {
    let items;
    items = projectData.filter((project) => project.type === "Frontend");
    if (items.length > 0) {
      setFrontendProjects(items);
    } else {
      // console.log("No items in this category");
    }

    items = projectData.filter((project) => project.type === "Full Stack");
    if (items.length > 0) {
      setFullStackProjects(items);
    } else {
      console.log("No items in this category");
    }
    setLoading(false);
  };

  const checkWidth = () => {
    setWidth(window.innerWidth);
    if (width > 500) {
      setIsSidebarOpen(false);
    }
  };
  const handleOptionClick = (e) => {
    setActiveOption(e.currentTarget.id);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });
  //Functions
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const externalRedirect = (e) => {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === "linkedin") {
      // window.location.href = "https://www.linkedin.com/in/raghavkapur/";
      window.open("https://www.linkedin.com/in/raghavkapur/", "_blank");
    }
    if (e.currentTarget.id === "github") {
      window.open("https://github.com/codingkapur", "_blank");
    }
    if (e.currentTarget.id === "youtube") {
      window.open("https://youtube.com/raghavkapur", "_blank");
    }
    if (e.currentTarget.id === "instagram") {
      window.open("https://instagram.com/misterkapur", "_blank");
    }
  };

  const openMailForm = () => {
    setMailFormOpen(true);
  };
  const closeMailForm = () => {
    setMailFormOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        activeOption,
        setActiveOption,
        handleOptionClick,
        externalRedirect,
        mailFormOpen,
        openMailForm,
        closeMailForm,
        messageStatus,
        setMessageStatus,
        fetchProjectData,
        loading,
        organizeProjects,
        frontendProjects,
        fullStackProjects
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
