import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <div className="navbar__container">
      <div className="nav__content--container">
        <Link to="/" className="navbar__logo">
          Raghav <span className="logo-text-span">Kapur</span>
        </Link>
        <div className="navbar__links--container">
          <Link to="/about">
            <p className="navbar__link">About Me</p>
          </Link>
          <Link to="/work">
            <p className="navbar__link">My Work</p>
          </Link>
          <Link to="/connect">
            <p className="navbar__link">Connect</p>
          </Link>
        </div>
        <div
          className="sidebar__toggle--btn open-sidebar"
          onClick={openSidebar}
        >
          <FaBars />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
