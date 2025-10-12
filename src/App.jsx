// src/App.jsx

// Importa las herramientas necesarias de React y las librerías.
import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import CarritoPage from './pages/CarritoPage';
import ContactPage from './pages/ContactPage'; // <-- 1. Importa la nueva página
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
        // Prepara precios simulados y categorías legibles.
        const priceOptions = [19.99, 24.99, 29.99, 39.99, 49.99, 59.99];
        const juegosConDetalles = (data.results || []).map((game, index) => ({
          ...game,
          price: priceOptions[index % priceOptions.length],
          categories:
            game.genres && game.genres.length > 0
              ? game.genres.map((genre) => genre.name)
              : ['Sin categoría'],
        }));
        // Actualiza el estado con los videojuegos enriquecidos.
        setVideojuegos(juegosConDetalles);
      } catch (error) {
        console.error('Error al cargar los videojuegos:', error);
      }
    };

    fetchVideojuegos();
  }, []); // El array vacío [] hace que este efecto se ejecute solo una vez.

  // Lista de categorias unicas derivadas de los videojuegos cargados.
  const categoriasDisponibles = useMemo(() => {
    const setCategorias = new Set();
    videojuegos.forEach((game) => {
      if (Array.isArray(game.categories)) {
        game.categories.forEach((categoria) => setCategorias.add(categoria));
      }
    });
    return Array.from(setCategorias).sort();
  }, [videojuegos]);

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
                categories={categoriasDisponibles}
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
          {/* Ruta para la página de contacto. */}
          <Route path="/mi-tienda/contacto" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Exporta el componente App para ser usado en main.jsx.
export default App;

