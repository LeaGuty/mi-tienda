// src/App.jsx

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import CarritoPage from './pages/CarritoPage';
import './App.css';

function App() {
  const [videojuegos, setVideojuegos] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchVideojuegos = async () => {
      const apiKey = '13d3aa841e734997ad796815fbd734c8';
      const url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=12`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setVideojuegos(data.results || []);
      } catch (error) {
        console.error('Error al cargar los videojuegos:', error);
      }
    };

    fetchVideojuegos();
  }, []);

  const handleAddToCart = (gameToAdd) => {
    if (!cart.find((game) => game.id === gameToAdd.id)) {
      setCart([...cart, gameToAdd]);
    }
  };

  const handleRemoveFromCart = (gameId) => {
    setCart(cart.filter((game) => game.id !== gameId));
  };

  return (
    <BrowserRouter>
      <NavbarComponent cartItemCount={cart.length} />
      <div className="container mt-4">
        <Routes>
          <Route path="/mi-tienda" element={<HomePage />} />
          <Route
            path="/mi-tienda/catalogo"
            element={
              <CatalogoPage
                videojuegos={videojuegos}
                cart={cart}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/mi-tienda/carrito"
            element={
              <CarritoPage
                cart={cart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
