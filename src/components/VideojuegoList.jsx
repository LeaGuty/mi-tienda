// src/components/VideojuegoList.jsx

// --- Componente de Lista de Videojuegos ---
// Muestra una grilla de tarjetas, cada una representando un videojuego.

import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

// Recibe la lista de juegos, el estado del carrito y la función para agregar.
const VideojuegoList = ({ videojuegos, cart, onAddToCart }) => {
  return (
    <Row>
      {/* Usamos .map() para recorrer la lista de videojuegos y crear una tarjeta para cada uno. */}
      {videojuegos.map((game) => {
        // Variable booleana que es 'true' si el juego ya está en el carrito.
        const isInCart = cart.some(item => item.id === game.id);
        const categories = Array.isArray(game.categories) ? game.categories : [];
        const formattedPrice =
          typeof game.price === 'number' ? game.price.toFixed(2) : 'N/D';
        
        return (
          // 'key' es un identificador único que React necesita para optimizar las listas.
          <Col key={game.id} lg={4} md={6} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={game.background_image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{game.name}</Card.Title>
                <Card.Text className="text-secondary small mb-2 text-start">
                  Categorías:
                </Card.Text>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <Badge bg="secondary" key={`${game.id}-${category}`}>
                        {category}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-muted">Sin categorías</span>
                  )}
                </div>
                <Card.Text className="fw-bold mb-3">
                  Precio: ${formattedPrice}
                </Card.Text>
                
                {/* Renderizado Condicional: El botón cambia su texto, color y estado */}
                {/* si el videojuego ya fue agregado al carrito. */}
                <Button 
                  variant={isInCart ? 'success' : 'primary'}
                  className="mt-auto"
                  onClick={() => onAddToCart(game)}
                  disabled={isInCart}
                >
                  {isInCart ? 'En el carrito' : 'Agregar al carrito'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

// Exportamos el componente para usarlo en nuestras páginas.
export default VideojuegoList;
