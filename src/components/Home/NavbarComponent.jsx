import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponent.css';

function NavbarComponent() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Rent Up</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fs-5 fw-bold hover-green" href="#home">Home</Nav.Link>
              <Nav.Link className="fs-5 fw-bold hover-green" href="#about">About</Nav.Link>
              <Nav.Link 
                className="fs-5 fw-bold hover-green" 
                href="#favourites" 
                onClick={(e) => {
                  e.preventDefault();
                  toggleSidebar();
                }}
              >
                My Favourites
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <h3>My Favourites</h3>
        <ul>
          <li>Favorite Item 1</li>
          <li>Favorite Item 2</li>
          <li>Favorite Item 3</li>
        </ul>
      </div>
    </>
  );
}

export default NavbarComponent;
