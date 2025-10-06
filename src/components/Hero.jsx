// src/components/Hero.jsx

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Este componente recibe un título, un subtítulo y el texto del botón como props.
const Hero = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    // La clase 'hero-section' es para el estilo del fondo que agregaremos en CSS.
    <div className="hero-section text-white d-flex justify-content-center align-items-center">
      <div className="hero-overlay"></div> {/* Esta capa oscurecerá la imagen */}

      <Container className="text-center position-relative">
        <h1 className="display-4 fw-bold">{title}</h1>
        <p className="lead my-3">{subtitle}</p>
        <Button as={Link} to={buttonLink} variant="primary" size="lg">
          {buttonText}
        </Button>
      </Container>
    </div>
  );
};

export default Hero;