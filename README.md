# MeteoLocal 🌤️

**MeteoLocal** is a responsive weather web application that allows users to check current weather conditions in cities around the world. Users can search for a city or use geolocation to retrieve weather information for their current location.

**MeteoLocal** es una aplicación web meteorológica adaptable a distintos dispositivos que permite consultar las condiciones meteorológicas actuales de ciudades de todo el mundo. Los usuarios pueden buscar una ciudad o utilizar la geolocalización para obtener información meteorológica de su ubicación.

## Demo

[Try MeteoLocal](https://samuel-96.github.io/weather-app/)

## Features / Características

**English**

- Search for cities worldwide.
- Automatically detect the user's location using geolocation.
- Display current weather conditions and temperatures.
- Switch between Celsius and Fahrenheit.
- Navigate search results using the keyboard.
- Responsive interface for desktop and mobile devices.

**Español**

- Búsqueda de ciudades de todo el mundo.
- Detección automática de la ubicación mediante geolocalización.
- Consulta de las condiciones meteorológicas y temperaturas actuales.
- Cambio entre grados Celsius y Fahrenheit.
- Navegación por los resultados de búsqueda mediante el teclado.
- Interfaz adaptable a dispositivos móviles y de escritorio.

## Built with / Tecnologías

- **Languages:** JavaScript, HTML5, CSS3.
- **Bundler:** Webpack.
- **API:** [OpenWeatherMap](https://openweathermap.org/api).
- **Tools:** Visual Studio Code, Git, GitHub, ESLint and Prettier.

## Getting started / Instalación

### Requirements / Requisitos

- [Node.js](https://nodejs.org/) and npm.
- An [OpenWeatherMap API key](https://home.openweathermap.org/users/sign_up).

### Installation / Instalación

1. Clone the repository:

   ```bash
   git clone https://github.com/Samuel-96/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Configure your OpenWeatherMap API key in `src/scripts/api.js`.

5. Start the development server:

   ```bash
   npm start
   ```

6. Open the application at `http://localhost:8080`.

### Production build / Compilación

To generate an optimized production build, run:

```bash
npm run build
```

Webpack will generate the production files in the `dist/` directory.

## API configuration and security / Configuración y seguridad de la API

MeteoLocal uses the OpenWeatherMap API to retrieve weather information.

The API key is required for the application to make requests. Since this project uses a client-side architecture, a key included in the JavaScript bundle is publicly accessible.

For production deployments, API requests should be handled through a server-side function or backend to avoid exposing the key directly in the client.

## What I learned / Aprendizajes

**English**

- Organized application code using JavaScript modules.
- Integrated a third-party API and handled asynchronous requests with `async/await`.
- Implemented error handling for API requests and geolocation.
- Used Webpack to bundle and optimize application assets.
- Built responsive layouts using CSS Grid and Flexbox.
- Applied semantic HTML5 elements and accessibility practices.
- Managed project development with Git and GitHub.
- Tested the application in Firefox and Chromium-based browsers.

**Español**

- Organización del código mediante módulos de JavaScript.
- Integración de una API externa y gestión de peticiones asíncronas con `async/await`.
- Implementación del manejo de errores en las peticiones a la API y la geolocalización.
- Uso de Webpack para empaquetar y optimizar los recursos de la aplicación.
- Creación de diseños adaptables mediante CSS Grid y Flexbox.
- Aplicación de elementos semánticos HTML5 y buenas prácticas de accesibilidad.
- Gestión del proyecto mediante Git y GitHub.
- Pruebas de funcionamiento en Firefox y navegadores basados en Chromium.

---

**Developed by [Samuel-96](https://github.com/Samuel-96)**
