# Blog de Mujeres en el Fútbol
# Michelle Mejía 22596

## Descripción del Proyecto
Este proyecto es un blog dedicado a destacar y celebrar las carreras de mujeres futbolistas alrededor del mundo. Los usuarios pueden ver información detallada sobre jugadoras, incluyendo estadísticas de su carrera, mientras que los administradores pueden gestionar publicaciones a través de una ruta `/admin`.

Enlace para blog público http://tiburoncin.lat/22596/react-blog/
Enlaces para blog admin 
(Debes registrarte) https://stately-paprenjak-3d3ded.netlify.app/register
(Inicia sesión) https://stately-paprenjak-3d3ded.netlify.app/login

## Tecnologías Utilizadas

### Frontend
- **React**: Para componentes de UI eficientes y dinámicos.
- **Vite**: Para un entorno de desarrollo rápido con HMR.
- **Babel**: Para compatibilidad con navegadores más antiguos.
- **PropTypes**: Para validación de tipos en componentes.

### Backend (para la ruta `/admin`)
- **Node.js**: Compatibilidad con JavaScript y rendimiento eficiente.
- **Express**: Gestión de rutas y middleware para construir la API.
- **MariaDB**: Base de datos relacional para almacenar publicaciones y usuarios.
- **PM2**: Para mantener el servidor corriendo de forma continua y reiniciarlo automáticamente en caso de fallos.

## Instrucciones para Ejecutar el Proyecto Localmente

### 1. Clonar el Repositorio:
git clone https://github.com/michellemej22596/BlogMujeresEnElFutbolAdmin.git

### 2. Instala las dependencias: npm install

### 3. Inicia la aplicación de React (frontend): npm run dev Esto debería abrir automáticamente el blog en tu navegador predeterminado. Si no lo hace, puedes acceder a través de http://localhost:3000.

### 4. Navega a http://localhost:3000/admin para acceder a la interfaz administrativa.

## Nota
Asegúrate de tener Node.js y npm instalados antes de ejecutar el proyecto localmente.

Endpoints Importantes
GET /posts: Obtiene todas las publicaciones.
POST /posts: Crea una nueva publicación (solo admins).
PUT /posts/:id: Actualiza una publicación por su ID (solo admins).
DELETE /posts/:id: Elimina una publicación por su ID (solo admins).

## Contribuciones
Si deseas contribuir a este proyecto, por favor lee CONTRIBUTING.md para obtener más información.

## Licencia
Este proyecto está licenciado bajo el MIT.