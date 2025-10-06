// src/App.jsx

// Importa las herramientas necesarias de React y las librerías.
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import CarritoPage from './pages/CarritoPage';
import './App.css';

// Componente principal que funciona como el cerebro de la aplicación.
function App() {
  // Estado para guardar la lista de videojuegos de la API.
  const [videojuegos, setVideojuegos] = useState([]);
  // Estado para guardar los productos en el carrito.
  const [cart, setCart] = useState([]);

  // Efecto para cargar los datos de la API una sola vez.
  useEffect(() => {
    const fetchVideojuegos = async () => {
      // Clave de API para el servicio RAWG.
      const apiKey = '13d3aa841e734997ad796815fbd734c8';
      const url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=12`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        // Actualiza el estado con los videojuegos recibidos.
        setVideojuegos(data.results || []);
      } catch (error) {
        console.error('Error al cargar los videojuegos:', error);
      }
    };

    fetchVideojuegos();
  }, []); // El array vacío [] hace que este efecto se ejecute solo una vez.

  // Función para agregar un juego al carrito.
  const handleAddToCart = (gameToAdd) => {
    // Revisa si el juego ya existe para no agregarlo de nuevo.
    if (!cart.find((game) => game.id === gameToAdd.id)) {
      setCart([...cart, gameToAdd]);
    }
  };

  // Función para eliminar un juego del carrito.
  const handleRemoveFromCart = (gameId) => {
    setCart(cart.filter((game) => game.id !== gameId));
  };

  // Renderiza la estructura de la aplicación, incluyendo el router y las páginas.
  return (
    <BrowserRouter>
      {/* La barra de navegación se muestra en todas las páginas. */}
      <NavbarComponent cartItemCount={cart.length} />
      <div className="container mt-4">
        {/* Routes define las diferentes "páginas" de la aplicación. */}
        <Routes>
          {/* Ruta para la página de inicio. */}
          <Route path="/mi-tienda" element={<HomePage />} />
          {/* Ruta para la página del catálogo. */}
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
          {/* Ruta para la página del carrito. */}
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

// Exporta el componente App para ser usado en main.jsx.
export default App;