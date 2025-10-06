// src/components/Hero.jsx

// --- Componente Hero ---
// Responsable de mostrar el encabezado principal y visualmente atractivo (Hero Banner).
// Es un componente reutilizable, diseñado para ser usado en la página de inicio.

// 1. IMPORTACIONES
// Importamos las herramientas necesarias de nuestras librerías.
import React from 'react';
import { Container, Button } from 'react-bootstrap'; // Componentes para la estructura y botones.
import { Link } from 'react-router-dom'; // Componente para la navegación sin recargar la página.

// 2. DEFINICIÓN DEL COMPONENTE
// Se define como una función que acepta 'props' (propiedades) para ser personalizable.
// Usamos desestructuración ({ title, ... }) para acceder a los props directamente.
const Hero = ({ title, subtitle, buttonText, buttonLink }) => {
  
  // 3. RENDERIZADO DEL COMPONENTE
  // Lo que se devuelve aquí es el código JSX que se dibujará en la pantalla.
  return (
    // Contenedor principal con una clase CSS personalizada ('hero-section') para el estilo de fondo.
    // Las clases de Bootstrap 'd-flex', 'justify-content-center' y 'align-items-center' centran el contenido.
    <div className="hero-section text-white d-flex justify-content-center align-items-center">
      
      {/* Esta capa oscura se superpone a la imagen de fondo para que el texto sea más legible. */}
      <div className="hero-overlay"></div>
      
      {/* El contenido se envuelve en un Container de Bootstrap para un padding y alineación adecuados. */}
      {/* 'position-relative' asegura que el texto esté por encima de la capa de superposición. */}
      <Container className="text-center position-relative">
        
        {/* El contenido del Hero se rellena con los props recibidos. */}
        <h1 className="display-4 fw-bold">{title}</h1>
        <p className="lead my-3">{subtitle}</p>
        
        {/* Este es un Botón de React-Bootstrap que se comporta como un Link de React Router. */}
        {/* El prop 'as={Link}' es la clave para esta integración. */}
        <Button as={Link} to={buttonLink} variant="primary" size="lg">
          {buttonText}
        </Button>
      </Container>
    </div>
  );
};

// 4. EXPORTACIÓN
// Hacemos que el componente esté disponible para ser importado en otras partes de la aplicación.
export default Hero;