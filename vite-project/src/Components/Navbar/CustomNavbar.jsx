import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBell, FaUser } from 'react-icons/fa';
import './CustomNavbar.css'; // Import the CSS file for the switch

const CustomNavbar = () => {
 

  return (
    <Navbar expand="lg" className={`custom-navbar`}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#Section1" className="custom-nav-link mx-5">Home</Nav.Link>
          <Nav.Link href="#Intro" className="custom-nav-link mx-5">About Me</Nav.Link>
          <Nav.Link href="#Skills" className="custom-nav-link mx-5">Skills</Nav.Link>
          <Nav.Link href="#projects" className="custom-nav-link mx-5">Projects</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
