# CleanSkin Frontend

Este proyecto es el frontend de CleanSkin, una tienda de productos para el cuidado de la piel, desarrollado con React.

## Características

- Catálogo de productos con imágenes, precios y categorías.
- Carrito de compras con funcionalidad para agregar, eliminar y vaciar productos.
- Registro y login de usuarios.
- Navegación responsiva con menú hamburguesa en móviles.
- Página de contacto con formulario y alertas.
- Integración con backend vía API REST.

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/AalonsoBravo/deployFrontCleanSkin.git
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Configura las variables de entorno en el archivo `.env`:
   ```
   REACT_APP_API_LOGIN_URL=http://localhost:9000/api/login
   REACT_APP_API_REGISTER_URL=http://localhost:9000/api/register
   REACT_APP_API_PRODUCTS_URL=http://localhost:9000/api/productos
   REACT_APP_API_CART_URL=http://localhost:9000/api/carritos/agregarAlCarrito
   REACT_APP_API_CART_SHOW_URL=http://localhost:9000/api/carritos/mostrar
   REACT_APP_API_CART_DELETE_URL=http://localhost:9000/api/carritos/eliminarDeCarrito
   REACT_APP_API_CART_EMPTY_URL=http://localhost:9000/api/carritos/vaciar
   ```

## Uso

1. Inicia el servidor de backend (ver documentación del backend).
2. Inicia el frontend:
   ```
   npm start
   ```
3. Accede a `http://localhost:3000` en tu navegador.

## Estructura de carpetas

```
src/
  Components/      # Componentes reutilizables (Navbar, Footer, etc.)
  pages/           # Páginas principales (Home, Carrito, Contacto, etc.)
  services/        # Servicios para llamadas a la API
  css/             # Archivos de estilos CSS
  images/          # Imágenes usadas en el proyecto
  App.js           # Componente principal
  index.js         # Punto de entrada
```

## Dependencias principales

- React
- React Router DOM
- Axios
- SweetAlert2

## Autor

- Alonso

## Licencia

Este proyecto está bajo la licencia