import "./Navbar.css";
import { FaBars} from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const {  openSidebar } = useGlobalContext();

  return (
    <nav className="navbar__container">
      <p className="navbar__logo">Raghav Kapur</p>
      <div className="navbar__links--container">
        <p className="navbar__link">About</p>
        <p className="navbar__link">Projects</p>
        <p className="navbar__link">Services</p>
        <p className="navbar__link">Contact</p>
      </div>
      <FaBars
        className="sidebar__toggle--btn open-sidebar"
        onClick={openSidebar}
      />
    </nav>
  );
};
export default Navbar;
