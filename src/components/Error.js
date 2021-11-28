import "./Error.css";
import {Link} from 'react-router-dom';
const Error = () => {

  return (
    <div className="error__container">
        <h1 className="error__container--title">You seem to be lost!</h1>
        <p className="error__container--message">Hey. This page doesn't exist okay? It's best if you don't linger around here anymore. You don't want to get into unnecessary trouble!</p>
        <Link to="/">
        <p className="home-btn">Go Home</p>
        </Link>
    </div>
  );
};
export default Error;
