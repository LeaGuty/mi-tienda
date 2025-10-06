# 🎮 Mi Tienda de Videojuegos con React

Este proyecto es una aplicación web de e-commerce para una tienda de videojuegos, desarrollada como parte de la evaluación sumativa para la asignatura **Desarrollo Frontend I (PFY2201)** de Duoc UC.

La aplicación permite a los usuarios ver un catálogo de juegos cargado desde una API externa, buscar títulos específicos, y simular la acción de agregar y quitar productos de un carrito de compras.

---

## 🚀 Demostración en Vivo

Puedes ver el proyecto desplegado y funcionando en el siguiente enlace:

**[https://leaguty.github.io/mi-tienda/](https://leaguty.github.io/mi-tienda/)**

---

## 📸 Captura de Pantalla

![Captura de pantalla de la página de inicio de la tienda de videojuegos](https://i.imgur.com/tu_enlace_a_la_imagen.png)

*(Instrucción: Sube una de tus capturas de pantalla a un sitio como [Imgur](https://imgur.com/upload) y reemplaza el enlace de arriba por el tuyo).*

---

## ✨ Características Principales

* **Catálogo Dinámico:** Los videojuegos se cargan desde la API externa de [RAWG](https://rawg.io/).
* **Navegación SPA:** Uso de **React Router** para una experiencia de navegación fluida entre las páginas de Inicio, Catálogo y Carrito sin recargar la página.
* **Buscador en Tiempo Real:** Filtra los videojuegos en el catálogo a medida que el usuario escribe.
* **Gestión de Carrito:** Funcionalidad para agregar y eliminar productos del carrito, con actualización del contador en tiempo real.
* **Renderizado Condicional:** La interfaz se adapta al estado de la aplicación, mostrando mensajes de "carrito vacío" o cambiando el estilo de los botones.
* **Diseño Responsivo:** Interfaz construida con **React-Bootstrap** para una correcta visualización en dispositivos de escritorio y móviles.

---

## 🛠️ Tecnologías Utilizadas

* **[React](https://reactjs.org/)**: Librería principal para la construcción de la interfaz de usuario.
* **[Vite](https://vitejs.dev/)**: Herramienta de frontend para un entorno de desarrollo rápido.
* **[React Router](https://reactrouter.com/)**: Para la gestión de rutas en la aplicación.
* **[Bootstrap](https://getbootstrap.com/)** y **[React-Bootstrap](https://react-bootstrap.github.io/)**: Para el diseño y los componentes de la interfaz.
* **[RAWG API](https://rawg.io/apidocs)**: Como fuente de datos para el catálogo de videojuegos.

---

## ⚙️ Instalación y Puesta en Marcha Local

Si deseas ejecutar este proyecto en tu propio computador, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/LeaGuty/mi-tienda.git](https://github.com/LeaGuty/mi-tienda.git)
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd mi-tienda
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Configura tu API Key:**
    * Crea un archivo llamado `.env` en la raíz del proyecto.
    * Añade la siguiente línea, reemplazando `TU_API_KEY` con tu clave personal de [RAWG](https://rawg.io/apikey):
        ```
        VITE_API_KEY=TU_API_KEY
        ```
    * **Importante:** Asegúrate de que el archivo `.gitignore` contenga la línea `.env` para no subir tus claves secretas a GitHub.

5.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

---

## 🌐 Despliegue

Este proyecto está desplegado en GitHub Pages. El despliegue se realiza automáticamente al ejecutar el siguiente comando, que compila la aplicación y la publica en la rama `gh-pages`:

```bash
npm run deploy
