import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="nav-logo">MK</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
