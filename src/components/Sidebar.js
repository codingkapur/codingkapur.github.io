import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context"

const Sidebar = () => {
  //Values and Functions
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={isSidebarOpen? "sidebar__container show-sidebar" : "sidebar__container"}>
      <div className="sidebar__top--container">
        <p className="sidebar__logo">Raghav Kapur</p>
        <FaTimes className="close-sidebar__btn" onClick={closeSidebar}/>
      </div>
      <div className="sidebar__links--container">
        <p className="sidebar--link">About</p>
        <p className="sidebar--link">Projects</p>
        <p className="sidebar--link">Blog</p>
        <p className="sidebar--link">Contact</p>
      </div>
    </div>
  );
};
export default Sidebar;
