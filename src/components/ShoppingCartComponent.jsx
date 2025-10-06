// src/components/ShoppingCartComponent.jsx

// --- Componente del Carrito de Compras ---
// Muestra los productos agregados, el total y permite eliminarlos.

import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

// Recibe el 'cart' y la función 'onRemoveFromCart' desde el componente padre (App.jsx).
const ShoppingCartComponent = ({ cart, onRemoveFromCart }) => {
  // Calcula el total sumando un precio simulado por cada item en el carrito.
  const total = cart.reduce((sum, item) => sum + 49.99, 0).toFixed(2);

  return (
    <div>
      <h2>Carrito de Compras</h2>

      {/* Renderizado Condicional: Si el carrito no tiene items, muestra un mensaje. */}
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        // Si tiene items, muestra la lista de productos.
        <ListGroup>
          {cart.map(game => (
            <ListGroup.Item key={game.id} className="d-flex justify-content-between align-items-center">
              {game.name}
              {/* Al hacer clic, se ejecuta la función para eliminar, usando el id del juego. */}
              <Button variant="danger" size="sm" onClick={() => onRemoveFromCart(game.id)}>Eliminar</Button>
            </ListGroup.Item>
          ))}
          {/* Muestra el total calculado al final de la lista. */}
          <ListGroup.Item className="d-flex justify-content-between align-items-center fw-bold">
            Total:
            <span>${total}</span>
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

// Exporta el componente para que pueda ser usado por otros archivos.
export default ShoppingCartComponent;