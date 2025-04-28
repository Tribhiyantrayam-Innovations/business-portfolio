import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../logo.jpg';
import '../style/nav.css'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
<div className="logo-container">
          <a href="/" className="logo-link">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="logo-img"
            />
          </a>
        </div>
      
      {/* Mobile Menu Button */}
      <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/portfolio" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/blog" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;