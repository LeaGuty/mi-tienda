// src/App.jsx

// --- Componente Principal y Cerebro de la Aplicación ---
// Gestiona el estado global (videojuegos, carrito) y la configuración de las rutas.

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import CarritoPage from './pages/CarritoPage';
import './App.css'; 

function App() {
  // Estado para la lista completa de videojuegos que viene de la API.
  const [videojuegos, setVideojuegos] = useState([]);
  // Estado para la lista de videojuegos que el usuario agrega al carrito.
  const [cart, setCart] = useState([]);

  // useEffect se ejecuta una sola vez para cargar los datos de la API al iniciar.
  useEffect(() => {
    const fetchVideojuegos = async () => {
      const apiKey = '13d3aa841e734997ad796815fbd734c8';
      const url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=12`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        // Se actualiza el estado con los datos recibidos de la API.
        setVideojuegos(data.results || []);
      } catch (error) {
        console.error("Error al cargar los videojuegos:", error);
      }
    };
    fetchVideojuegos();
  }, []); // El array vacío [] asegura que este efecto se ejecute solo una vez.

  // Función para agregar un juego al carrito, evitando duplicados.
  const handleAddToCart = (gameToAdd) => {
    if (!cart.find(game => game.id === gameToAdd.id)) {
      setCart([...cart, gameToAdd]);
    }
  };

  // Función para eliminar un juego del carrito usando su id.
  const handleRemoveFromCart = (gameId) => {
    setCart(cart.filter(game => game.id !== gameId));
  };

  // Renderiza el sistema de rutas y los componentes de cada página.
  return (
    <BrowserRouter>
      <NavbarComponent cartItemCount={cart.length} />
      <div className="container mt-4">
        <Routes>
          {/* Cada <Route> define una URL y el componente que se mostrará. */}
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={
            // Pasamos los estados y funciones necesarios a la página del catálogo.
            <CatalogoPage 
              videojuegos={videojuegos} 
              cart={cart} 
              onAddToCart={handleAddToCart} 
            />
          } />
          <Route path="/carrito" element={
            // Pasamos los estados y funciones necesarios a la página del carrito.
            <CarritoPage 
              cart={cart} 
              onRemoveFromCart={handleRemoveFromCart} 
            />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;