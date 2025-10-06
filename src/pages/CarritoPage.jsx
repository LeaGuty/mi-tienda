// src/pages/CarritoPage.jsx

// --- Página del Carrito de Compras ---
// Este componente actúa como una "página" para mostrar el carrito.
// Su principal responsabilidad es renderizar el componente específico del carrito.

import React from 'react';
import ShoppingCartComponent from '../components/ShoppingCartComponent';

// Este es un componente "contenedor" o "wrapper".
// Recibe los props desde App.jsx y los pasa directamente al componente hijo.
// La sintaxis '{...props}' reenvía todas las propiedades (como 'cart' y 'onRemoveFromCart').
const CarritoPage = (props) => <ShoppingCartComponent {...props} />;

// Exportamos la página para que el Router en App.jsx pueda renderizarla.
export default CarritoPage;