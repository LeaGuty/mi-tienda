// src/components/NavbarComponent.jsx

// --- Barra de Navegación Principal ---
// Muestra los enlaces para navegar por el sitio y el contador del carrito.

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

// El componente recibe 'cartItemCount' para saber cuántos items hay en el carrito.
const NavbarComponent = ({ cartItemCount }) => {
  return (
    // Navbar de Bootstrap que se queda fija en la parte superior ('sticky-top').
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        {/* Usamos 'as={Link}' para que los componentes de Bootstrap naveguen con React Router. */}
        <Navbar.Brand as={Link} to="/">GameStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
          </Nav>
          <Button as={Link} to="/carrito" variant="outline-light">
            {/* Muestra el número de items recibidos por props. */}
            Carrito ({cartItemCount})
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Exportamos el componente para usarlo en App.jsx.
export default NavbarComponent;