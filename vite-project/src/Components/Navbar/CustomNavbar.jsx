import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBell, FaUser } from 'react-icons/fa';
import './CustomNavbar.css'; // Import the CSS file for the switch

const CustomNavbar = () => {
  // Set isDarkMode to true by default
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <Navbar expand="lg" className={`custom-navbar ${isDarkMode ? 'bg-dark' : 'bg-pastel-purple'}`}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#Section1" className="custom-nav-link mx-5">Home</Nav.Link>
          <Nav.Link href="#Intro" className="custom-nav-link mx-5">About Me</Nav.Link>
          <Nav.Link href="#Skills" className="custom-nav-link mx-5">Skills</Nav.Link>
          <Nav.Link href="#projects" className="custom-nav-link mx-5">Projects</Nav.Link>
        </Nav>
        <Nav>
          <label className="switch mx-2">
            <input type="checkbox" checked={isDarkMode} onChange={handleThemeSwitch} />
            <span className="slider"></span>
          </label>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
