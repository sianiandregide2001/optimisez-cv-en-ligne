import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css'; 

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo"> <strong>JOHN DOE</strong></div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className={isActive('/')}>
            <Link to="/" onClick={toggleHamburger}>ACCUEIL</Link>
          </li>
          <li className={isActive('/services')}>
            <Link to="/services" onClick={toggleHamburger}>SERVICES</Link>
          </li>
          <li className={isActive('/portfolio')}>
            <Link to="/portfolio" onClick={toggleHamburger}>REALISATIONS</Link>
          </li>
          <li className={isActive('/blog')}>
            <Link to="/blog" onClick={toggleHamburger}>BLOG</Link>
          </li>
          <li className={isActive('/contact')}>
            <Link to="/contact" onClick={toggleHamburger}>ME CONTACTER</Link>
          </li>
          <li className={isActive('/legal')}>
            <Link to="/legal" onClick={toggleHamburger}>LEGAL</Link>
          </li>
        </ul>
      </nav>
      <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleHamburger}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}
