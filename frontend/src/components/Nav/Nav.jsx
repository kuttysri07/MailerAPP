import { useState } from "react";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="navbar">
      <h1 className="navbar-title">M@iler</h1>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

     <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>

        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/resumes" ? "active" : ""}>
          <Link to="/resumes">Resumes</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/applied">Applied</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
