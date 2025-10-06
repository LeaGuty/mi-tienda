// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero'; // Importamos nuestro nuevo componente

const HomePage = () => {
  return (
    <div>
      <Hero
        title="GameStore"
        subtitle="Encuentra los mejores videojuegos para todas las plataformas."
        buttonText="Ver Catálogo"
        buttonLink="/catalogo"
      />

      <div className="container text-center my-5">
        <h2>Juegos Destacados</h2>
        <p>Explora nuestra selección de títulos populares.</p>
        {/* Aquí podrías agregar en el futuro una pequeña lista de juegos destacados */}
      </div>
    </div>
  );
};

export default HomePage;
