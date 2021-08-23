
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logov2url  from '../assets/images/Logov2.png'


//import {Image } from "react-bootstrap/Image";
import './Header.scss';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
      <img className="logov2url" src={ logov2url }/> 
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#Contact">Contact</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};

export default Header;