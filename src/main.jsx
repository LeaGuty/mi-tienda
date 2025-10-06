// src/main.jsx

// --- Punto de Entrada de la Aplicación ---
// Este archivo es el primero en ejecutarse. Su trabajo es "inyectar"
// toda nuestra aplicación de React en el archivo index.html.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal que contiene todo.

// Importa los estilos de Bootstrap para que estén disponibles en toda la app.
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Busca el <div> con id="root" en index.html y renderiza nuestro componente <App /> dentro de él.
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode es una herramienta que ayuda a detectar posibles problemas en la app.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);