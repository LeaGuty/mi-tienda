// src/pages/ContactPage.jsx

import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const ContactPage = () => {
  // Estado para cada campo del formulario.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // Estado para mostrar un mensaje de éxito.
  const [showAlert, setShowAlert] = useState(false);

  // Maneja los cambios en los inputs y actualiza el estado.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Se ejecuta al enviar el formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue.
    console.log('Datos del formulario:', formData);

    // Muestra una alerta de éxito.
    setShowAlert(true);
    // Limpia el formulario.
    setFormData({ name: '', email: '', message: '' });

    // Oculta la alerta después de 3 segundos.
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Formulario de Contacto</h2>

      {/* Muestra una alerta si showAlert es verdadero */}
      {showAlert && (
        <Alert variant="success">
          ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Escribe tu mensaje aquí"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;