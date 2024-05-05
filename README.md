# Blog de Mujeres en el Fútbol
#Michelle Mejia 22596

## Descripción del Proyecto
Este proyecto es un blog dedicado a destacar y celebrar las carreras de mujeres futbolistas alrededor del mundo. Ofrece a los usuarios la posibilidad de ver información detallada sobre diferentes jugadoras, incluyendo estadísticas de su carrera, y también permite a los administradores gestionar las publicaciones a través de una ruta `/admin`.

## Tecnologías Utilizadas

### Frontend
- **React**: Se utilizó para aprovechar su eficiente actualización y renderizado de componentes, lo que es ideal para una experiencia de usuario dinámica.
- **Babel**: Permite escribir código JavaScript moderno que es compatible con navegadores más antiguos.
- **PropTypes**: Facilita la validación de tipos de propiedades en los componentes React.

### Backend (para la ruta `/admin`)
- **Node.js**: Por su compatibilidad con JavaScript en el frontend y su rendimiento eficiente para aplicaciones en tiempo real.
- **Express**: Para manejar las rutas y middleware necesarios en la construcción de la API de la aplicación.

### Gestión de Procesos
- **PM2**: Se seleccionó para asegurar que la aplicación se mantenga corriendo de manera continua y se reinicie automáticamente en caso de fallos.

## Instrucciones para Ejecutar el Proyecto Localmente

Para ejecutar el blog localmente, sigue estos pasos:

1. Clona el repositorio:
git clone https://github.com/michellemej22596/BlogMujeresEnElFutbol.git


2. Instala las dependencias:
npm install


3. Inicia la aplicación de React (frontend):
npm run dev
Esto debería abrir automáticamente el blog en tu navegador predeterminado. Si no lo hace, puedes acceder a través de `http://localhost:3000`.

4. Navega a `http://localhost:3000/admin` para acceder a la interfaz administrativa.

### Nota
Asegúrate de tener instalado Node.js y npm en tu sistema antes de intentar ejecutar el proyecto localmente.

---

## Contribuciones
Si deseas contribuir a este proyecto, por favor lee `CONTRIBUTING.md` para más información sobre cómo hacerlo.

## Licencia
Este proyecto está licenciado bajo el MIT.
