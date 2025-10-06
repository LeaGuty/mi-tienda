// src/pages/HomePage.jsx

// --- Página de Inicio ---
// Es la primera vista que el usuario ve al entrar al sitio.

import React from 'react';
import Hero from '../components/Hero'; // Importa el componente del encabezado visual.

// Define el componente que estructura la página de inicio.
const HomePage = () => {
  return (
    <div>
      {/* Renderiza el componente Hero, pasándole props para personalizar el texto y el enlace. */}
      <Hero
        title="GameStore"
        subtitle="Encuentra los mejores videojuegos para todas las plataformas."
        buttonText="Ver Catálogo"
        // Este enlace debe coincidir con la ruta definida en App.jsx para el catálogo.
        buttonLink="/mi-tienda/catalogo"
      />

      {/* Sección estática con contenido adicional de bienvenida. */}
      <div className="container text-center my-5">
        <h2>Juegos Destacados</h2>
        <p>Explora nuestra selección de títulos populares.</p>
        {/* Este es un buen lugar para agregar futuros componentes. */}
      </div>
    </div>
  );
};

// Exporta la página para que el Router en App.jsx pueda usarla.
export default HomePage;
