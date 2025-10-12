# 🎮 GameStore: Proyecto de E-commerce con React

Proyecto final para la asignatura **Desarrollo Frontend I (PFY2201)** de Duoc UC. GameStore es una aplicación web de página única (SPA) que simula una tienda de videojuegos, implementando funcionalidades clave del desarrollo frontend moderno con React.

---

## 🚀 Despliegue en Vivo

La aplicación está desplegada en GitHub Pages y se puede acceder a través del siguiente enlace:

**[https://leaguty.github.io/mi-tienda/](https://leaguty.github.io/mi-tienda/)**

---

## ✨ Funcionalidades Implementadas

La aplicación cuenta con una arquitectura basada en componentes y un manejo de estado centralizado, ofreciendo las siguientes características:

* **Navegación Fluida:** Sistema de enrutamiento del lado del cliente implementado con **React Router**, permitiendo la navegación entre las páginas de Inicio, Catálogo, Carrito y Contacto sin recargar la página.
* **Catálogo Dinámico desde API:** Los videojuegos se cargan asincrónicamente desde la API externa de **RAWG** al iniciar la aplicación, utilizando `useEffect` para manejar el efecto secundario.
* **Filtrado Avanzado en Catálogo:**
    * **Buscador por Nombre:** Filtra los juegos en tiempo real a medida que el usuario escribe.
    * **Filtro por Categorías:** Genera dinámicamente una lista de categorías a partir de los datos de la API y permite filtrar el catálogo.
* **Gestión de Carrito de Compras:**
    * Permite agregar y eliminar productos del carrito.
    * El estado del carrito es gestionado centralmente con `useState` y se actualiza en tiempo real.
    * El contador de ítems en la barra de navegación se actualiza instantáneamente.
* **Renderizado Condicional:** La interfaz se adapta para mejorar la experiencia de usuario:
    * Muestra un mensaje cuando el carrito está vacío.
    * El botón "Agregar al carrito" cambia su texto, color y estado a "En el carrito" cuando un producto ya ha sido agregado.
* **Formulario de Contacto:** Una página de contacto con un formulario controlado por el estado de React, con validación básica y feedback visual al usuario tras el envío.
* **Diseño Responsivo:** La interfaz está construida con componentes de **React-Bootstrap**, asegurando una correcta visualización en diferentes tamaños de pantalla.

---

## 🛠️ Tecnologías y Librerías

* **React (v19)**: Librería principal para la construcción de la interfaz de usuario.
    * **Hooks**: `useState`, `useEffect`, `useMemo` para el manejo de estado, efectos secundarios y optimización.
* **Vite**: Herramienta de frontend para un entorno de desarrollo rápido y compilación optimizada.
* **React Router DOM**: Para la gestión de rutas y navegación en la Single Page Application.
* **React-Bootstrap**: Librería de componentes para un diseño rápido y responsivo basado en Bootstrap.
* **RAWG API**: Como fuente de datos externa para el catálogo de videojuegos.
* **Git y GitHub**: Para el control de versiones.
* **GitHub Pages**: Para el despliegue y publicación de la aplicación.

---

## ⚙️ Cómo Ejecutar el Proyecto en Local

Para clonar y ejecutar este proyecto en tu propio entorno de desarrollo, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/LeaGuty/mi-tienda.git](https://github.com/LeaGuty/mi-tienda.git)
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd mi-tienda
    ```

3.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```

4.  **Configura tu clave de API:**
    * Este proyecto requiere una clave de la API de [RAWG](https://rawg.io/apikey).
    * En la raíz del proyecto, el archivo `src/App.jsx` contiene la clave de API. Para una mejor práctica, se recomienda moverla a un archivo de entorno.

5.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación se abrirá automáticamente en `http://localhost:5173`.

---

## 🌐 Proceso de Despliegue

Este proyecto utiliza `gh-pages` para el despliegue automático en GitHub Pages.

El proceso se inicia ejecutando el siguiente comando, que compila la aplicación en la carpeta `dist` y la publica en la rama `gh-pages` del repositorio:

```bash
npm run deploy
