import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //State Values
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [activeOption, setActiveOption] = useState("1");

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

  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, activeOption, setActiveOption, handleOptionClick }}>
      {children}
    </AppContext.Provider>
  );
};

//Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
