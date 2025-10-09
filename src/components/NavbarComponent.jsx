// src/components/NavbarComponent.jsx

// --- Barra de Navegación Principal ---
// Muestra los enlaces para navegar por el sitio y el contador del carrito.

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

// Recibe 'cartItemCount' para mostrar el número de items en el carrito.
const NavbarComponent = ({ cartItemCount }) => {
  return (
    // Navbar de Bootstrap que se queda fija en la parte superior ('sticky-top').
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        {/* El prop 'as={Link}' integra React-Bootstrap con React Router. */}
        {/* La ruta 'to' debe coincidir con las rutas definidas en App.jsx. */}
        <Navbar.Brand as={Link} to="/mi-tienda">
          GameStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/mi-tienda/catalogo">
              Catálogo
            </Nav.Link>
            <Nav.Link as={Link} to="/mi-tienda/contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <Button as={Link} to="/mi-tienda/carrito" variant="outline-light">
            {/* Muestra el contador de items del carrito. */}
            Carrito ({cartItemCount})
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Exporta el componente para ser usado en App.jsx.
export default NavbarComponent;