import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="home">🏠</span> 
        <h1>HomeView</h1>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar change" : "bar"}></div>
        <div className={menuOpen ? "bar change" : "bar"}></div>
        <div className={menuOpen ? "bar change" : "bar"}></div>
      </div>

      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="Listings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Listings</NavLink></li>
        <li><NavLink to="About" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
        <li><NavLink to="Contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
