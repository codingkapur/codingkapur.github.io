import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  //Values and Functions
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const externalRedirect = (e) => {
    console.log(e.currentTarget.id)
    if(e.currentTarget.id==="linkedin"){
      // window.location.href = "https://www.linkedin.com/in/raghavkapur/";
      window.open('https://www.linkedin.com/in/raghavkapur/', '_blank');
    }
    if(e.currentTarget.id==="github"){
      window.open('https://github.com/codingkapur', '_blank');

    }
    if(e.currentTarget.id==="youtube"){
      window.open('https://youtube.com/raghavkapur', '_blank');

    }
    if(e.currentTarget.id==="instagram"){
      window.open('https://instagram.com/misterkapur', '_blank');

    }
  }

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
        <p onClick={externalRedirect}id="linkedin"><AiFillLinkedin className="social__link" /></p>
        <p onClick={externalRedirect}id="github"><AiFillGithub className="social__link"/></p>
        <p onClick={externalRedirect}id="youtube"><AiFillYoutube className="social__link"/></p>
        <p onClick={externalRedirect}id="instagram"><AiFillInstagram className="social__link"/></p>
      </div>
    </div>
  );
};
export default Sidebar;
