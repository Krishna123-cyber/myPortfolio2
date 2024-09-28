import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/k.png';

function Navbar() {
  return (
    <nav>
      <div className="logo"><img src={logo} alt="k.png" /></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
