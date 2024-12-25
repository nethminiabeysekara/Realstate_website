import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponent.css';

function NavbarComponent() {
  return (
    <Navbar bg="light" data-bs-theme="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Rent Up</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fs-5 fw-bold hover-green" href="#home">Home</Nav.Link>
            <Nav.Link className="fs-5 fw-bold hover-green" href="#about">About</Nav.Link>
            <Nav.Link className="fs-5 fw-bold hover-green" href="#favourites">My Favourites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
