// src/components/NavbarComponent.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavbarComponent = ({ cartItemCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/mi-tienda">
          GameStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/catalogo">
              Catálogo
            </Nav.Link>
          </Nav>
          <Button as={Link} to="/carrito" variant="outline-light">
            Carrito ({cartItemCount})
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
