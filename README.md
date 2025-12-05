Frontend Viaggio
🚀 Descripción
Frontend de la aplicación Viaggio, desarrollado en React + Vite.
Se encarga de la interfaz de usuario para reservas, actividades y destinos, consumiendo la API del backend mediante fetch.

📦 Tecnologías
- React
- Vite
- TypeScript
- fetch API para llamadas HTTP
- React Router para navegación
- TailwindCSS (si se usa para estilos)

⚙️ Instalación
# Clonar el repo
git clone https://github.com/DiegoFischer01/Frontend_Viaggio.git

# Entrar al proyecto
cd Frontend_Viaggio

# Instalar dependencias
npm install



📦 Paquetes adicionales
npm install react-router-dom       # Navegación entre páginas
npm install swiper                 # Carruseles y sliders interactivos
npm install bootstrap              # Estilos y componentes rápidos
npm install leaflet                # Mapas interactivos
npm install sweetalert2            # Alertas y modales personalizados


📝 Uso de cada paquete
- react-router-dom → Manejo de rutas y navegación SPA.
- swiper → Carruseles de imágenes y actividades.
- bootstrap → Componentes y estilos rápidos para prototipado.
- leaflet → Visualización de mapas y ubicaciones de hoteles/destinos.
- sweetalert2 → Alertas de confirmación y mensajes amigables al usuario.

▶️ Scripts
# Desarrollo
npm run dev

# Build de producción
npm run build

# Previsualizar build
npm run preview



🌍 Variables de entorno
Crear un archivo .env en la raíz con:
VITE_API_URL=http://localhost:3000


Ajustar la URL según el backend (local o desplegado en Vercel).


📂 Estructura del proyecto
react/
 ├── .vercel/           # Configuración de despliegue en Vercel
 ├── node_modules/      # Dependencias instaladas
 ├── public/            # Archivos estáticos públicos
 ├── src/               # Código fuente principal
 │   ├── assets/        # Imágenes y recursos gráficos
 │   ├── components/    # Componentes reutilizables
 │   ├── config/        # Configuración general (URLs, constantes)
 │   ├── context/       # Contextos globales (ej: usuario, viaje)
 │   ├── css/           # Archivos de estilos personalizados
 │   ├── data/          # Datos estáticos o mockeados
 │   ├── pages/         # Vistas principales (Home, Alojamientos, Actividades, etc.)
 │   ├── ui/            # Componentes visuales base (botones, inputs, etc.)
 │   ├── utils/         # Funciones utilitarias
 │   ├── App.jsx        # Componente raíz
 │   └── main.jsx       # Punto de entrada de la app
 ├── .gitignore         # Archivos y carpetas ignoradas por Git
 ├── eslint.config.js   # Configuración de ESLint
 ├── index.html         # HTML base de la app
 ├── package-lock.json  # Lock de dependencias
 ├── package.json       # Metadatos y scripts del proyecto
 ├── README.md          # Documentación del proyecto
 ├── vercel.json        # Configuración de Vercel
 ├── vite.config.js     # Configuración de Vite
 └── .env               # Variables de entorno

🧪 Buenas prácticas
- Mantener componentes pequeños y reutilizables.
- Centralizar las llamadas a la API en services/ usando fetch.
- Manejar errores y estados de carga (loading, error) en cada request.
- Validar datos antes de renderizar (ej: reserva?.hotel?.nombre).

🔗 Deploy
El frontend se despliega en Vercel.
Pasos:
- Conectar repo en Vercel.
- Configurar variables de entorno (VITE_API_URL).
- Deploy automático en cada push a main.