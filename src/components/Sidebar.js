import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  //Values and Functions
  const { isSidebarOpen, closeSidebar, externalRedirect } = useGlobalContext();

  return (
    <div
      className={
        isSidebarOpen ? "sidebar__container show-sidebar" : "sidebar__container"
      }
    >
      <div className="sidebar__top--container">
        <Link to="/" onClick={closeSidebar}>
          <p className="sidebar__logo">
            <span className="logo-text-span">Raghav</span> Kapur
          </p>
        </Link>

        <FaTimes className="close-sidebar__btn" onClick={closeSidebar} />
      </div>
      <div className="sidebar__links--container">
        <Link to="/about" className="sidebar--link" onClick={closeSidebar}>
          <p>About Me</p>
        </Link>
        <Link to="/work" className="sidebar--link" onClick={closeSidebar}>
          <p>My Work</p>
        </Link>
        <Link to="/connect" className="sidebar--link" onClick={closeSidebar}>
          <p>Connect</p>
        </Link>
      </div>
      <div className="social__links--container">
        <p onClick={externalRedirect} id="linkedin" className="social__link">
          <AiFillLinkedin />
        </p>
        <p onClick={externalRedirect} id="twitter" className="social__link">
          <AiFillTwitterSquare />
        </p>
        <p onClick={externalRedirect} id="github" className="social__link">
          <AiFillGithub />
        </p>
        <p onClick={externalRedirect} id="youtube" className="social__link">
          <AiFillYoutube />
        </p>
        <p onClick={externalRedirect} id="instagram" className="social__link">
          <AiFillInstagram />
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
