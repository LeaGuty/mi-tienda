// src/pages/CatalogoPage.jsx

// --- Página del Catálogo de Videojuegos ---
// Contiene la lógica del buscador y muestra la lista de videojuegos.

import React, { useState } from 'react';
import VideojuegoList from '../components/VideojuegoList';
import { Form, Container } from 'react-bootstrap';

// Recibe la lista completa de videojuegos y las funciones del carrito desde App.jsx.
const CatalogoPage = ({ videojuegos, cart, onAddToCart, categories = [] }) => {
  // Estado local que solo existe en esta página para guardar el texto del buscador.
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categoryOptions = ['Todas', ...categories];

  // Se crea una nueva lista filtrada en tiempo real según el término de búsqueda.
  // La búsqueda ignora si el texto está en mayúsculas o minúsculas.
  const filteredVideojuegos = videojuegos.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Todas' ||
      !selectedCategory ||
      (Array.isArray(game.categories) && game.categories.includes(selectedCategory));
    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      {/* Campo de texto (input) para que el usuario escriba su búsqueda. */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Buscar videojuego por título..."
          value={searchTerm} // El valor del input está conectado al estado.
          onChange={(e) => setSearchTerm(e.target.value)} // Cada letra que se escribe actualiza el estado.
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Le pasamos la lista ya filtrada al componente que muestra las tarjetas. */}
      <VideojuegoList 
        videojuegos={filteredVideojuegos} 
        cart={cart} 
        onAddToCart={onAddToCart} 
      />
    </Container>
  );
};

export default CatalogoPage;
