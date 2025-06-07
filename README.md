# 🎬 Netflix Clone - React & Tailwind

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDB" />
</div>

<div align="center">
  <h3>🚀 Una réplica moderna y responsiva de Netflix construida con React</h3>
  <p>Explora películas, ve detalles y disfruta de una experiencia cinematográfica increíble</p>
</div>

---

## ✨ Características Principales

- 🎯 **Interfaz Idéntica a Netflix** - Diseño pixel-perfect inspirado en la plataforma original
- 📱 **100% Responsivo** - Funciona perfectamente en móvil, tablet y desktop
- 🎬 **API Real de Películas** - Integración con The Movie Database (TMDB)
- 🔍 **Búsqueda Inteligente** - Encuentra cualquier película al instante
- 🎨 **Animaciones Fluidas** - Transiciones suaves y efectos visuales
- ⚡ **Rendimiento Optimizado** - Carga rápida y navegación fluida

## 🖼️ Vista Previa

### 🏠 Página Principal
*Carrusel de películas populares con navegación intuitiva*

### 🎬 Página de Detalles
*Vista detallada con información completa, trailer y recomendaciones*

### 📱 Versión Mobile
*Experiencia optimizada para dispositivos móviles*

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **React 18** | Framework principal para la UI |
| **Tailwind CSS** | Estilizado y diseño responsivo |
| **React Router** | Navegación entre páginas |
| **Vite** | Build tool y desarrollo |
| **TMDB API** | Base de datos de películas |

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn
- Clave API de TMDB

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/netflix-clone.git
   cd netflix-clone
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura las variables de entorno**
   ```bash
   # Crea un archivo .env en la raíz del proyecto
   echo "VITE_TMDB_API_KEY=tu_api_key_aqui" > .env
   ```

4. **Obtén tu API Key de TMDB**
   - Ve a [TMDB](https://www.themoviedb.org/settings/api)
   - Regístrate y obtén tu API Key
   - Reemplaza `tu_api_key_aqui` con tu clave real

5. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

6. **¡Listo!** 🎉
   Abre tu navegador en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
netflix-clone/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 🧩 Navbar.jsx
│   │   └── 🎬 MovieRow.jsx
│   ├── 📂 pages/
│   │   ├── 🏠 Home.jsx
│   │   └── 🎭 MovieDetail.jsx
│   ├── 📂 utils/
│   │   └── ⚙️ api.js
│   └── 📄 App.jsx
├── 📄 .env
├── 📄 package.json
└── 📄 README.md
```

## 🎨 Características del Diseño

### 🎯 Diseño Responsivo
- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints Inteligentes**: Adaptación fluida en todos los tamaños
- **Navegación Adaptive**: Menú hamburguesa en móvil, navbar completa en desktop

### 🎬 Experiencia de Usuario
- **Carrusel Interactivo**: Navegación suave entre películas
- **Efectos Hover**: Animaciones al pasar el mouse
- **Loading States**: Indicadores de carga elegantes
- **Transiciones Fluidas**: Navegación sin interrupciones

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación
npm run preview      # Vista previa de la build

# Linting
npm run lint         # Analiza el código
```

## 🌟 Próximas Características

- [ ] 🔐 Sistema de autenticación
- [ ] ❤️ Lista de favoritos persistente
- [ ] 🎥 Reproducción de trailers
- [ ] 🔍 Filtros avanzados de búsqueda
- [ ] 🌙 Modo oscuro/claro
- [ ] 📊 Recomendaciones personalizadas

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este proyecto:

1. 🍴 Fork el proyecto
2. 🌿 Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🔄 Abre un Pull Request

## 📸 Screenshots

<details>
<summary>📱 Ver más capturas de pantalla</summary>

### Desktop
![Desktop Home](./screenshots/desktop-home.png)
![Desktop Detail](./screenshots/desktop-detail.png)

### Mobile
![Mobile Home](./screenshots/mobile-home.png)
![Mobile Menu](./screenshots/mobile-menu.png)

</details>

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [The Movie Database (TMDB)](https://www.themoviedb.org/) por su increíble API
- [Netflix](https://netflix.com) por la inspiración del diseño
- [Tailwind CSS](https://tailwindcss.com/) por hacer el styling tan fácil
- [React](https://reactjs.org/) por ser un framework increíble

---

<div align="center">
  <p>Hecho con ❤️ por <a href="https://github.com/tu-usuario">Tu Nombre</a></p>
  <p>⭐ ¡Dale una estrella si te gustó el proyecto!</p>
</div>

## 📞 Contacto

- 📧 Email: tu-email@ejemplo.com
- 💼 LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- 🐦 Twitter: [@tu_usuario](https://twitter.com/tu_usuario)

---

<div align="center">
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with Love" />
  <img src="https://forthebadge.com/images/badges/uses-js.svg" alt="Uses JavaScript" />
  <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="Made with JavaScript" />
</div>