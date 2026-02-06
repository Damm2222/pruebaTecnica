# Posts App — React Native Web

Aplicación web hecha con **React Native** y **React Native Web** para gestionar Posts, usando **Redux Toolkit** como gestor de estado.

*Versión optimizada para deploment web sin dependencias Ruby.*

## Funcionalidades

1. **Insertar posts** — formulario con validación (nombre >= 3 caracteres, descripción >= 10 caracteres).
2. **Eliminar posts** — botón de eliminación con confirmación.
3. **Listar posts** — listado ordenado por fecha de creación (más recientes primero).
4. **Filtrar posts por nombre** — búsqueda en tiempo real con contador de resultados.

## Estructura de la Interfaz

| Sección        | Componente   | Descripción                          |
| -------------- | ------------ | ------------------------------------ |
| Formulario     | `PostForm`   | Crea nuevos posts                    |
| Filtro         | `PostFilter` | Busca posts por nombre               |
| Lista          | `PostList`   | Muestra y permite eliminar posts     |

## Buenas Prácticas

| Lenguaje / Formato          | Convención   |
| --------------------------- | ------------ |
| JSON                        | `camelCase`  |
| JavaScript / TypeScript     | `camelCase`  |
| Ruby                        | `snake_case` |

## 📁 Estructura del Proyecto

```
PruebaTecnica/
├── src/
│   ├── models/
│   │   └── post.model.ts            # Interfaces: Post, CreatePostDto
│   ├── services/
│   │   └── postService.ts           # Servicio que emula una API REST (sin backend)
│   ├── store/
│   │   ├── store.ts                 # Store principal de Redux
│   │   └── hooks.ts                 # Hooks tipados (useAppDispatch, useAppSelector)
│   ├── features/
│   │   └── posts/
│   │       ├── posts.slice.ts       # Slice con async thunks (loadPosts, addPost, deletePost)
│   │       └── posts.selectors.ts   # Selectors memoizados con Reselect
│   └── components/
│       ├── index.ts                 # Barrel de exports
│       ├── PostForm.tsx             # Formulario de creación
│       ├── PostFilter.tsx           # Filtro por nombre
│       ├── PostList.tsx             # Lista de posts
│       └── PostItem.tsx             # Item individual con botón de eliminar
├── App.tsx                          # Componente raíz con Provider
├── index.web.tsx                    # Entry point para web
├── index.html                       # HTML base
├── vite.config.ts                   # Configuración de Vite
└── package.json                     # Dependencias y scripts
```

### Servicio Emulado (sin Backend)

El archivo `src/services/postService.ts` simula llamadas a una API REST con latencia de red:

- `fetchPosts()` — emula `GET /api/posts` y retorna posts semilla.
- `createPost(dto)` — emula `POST /api/posts` generando id y fecha.
- `deletePostById(id)` — emula `DELETE /api/posts/:id`.

Los datos iniciales se cargan automáticamente al iniciar la app mediante un `createAsyncThunk`.

---

## 🚀 Getting Started (Configuración Web)

Esta aplicación está diseñada para ejecutarse en **navegadores web**. Siga estos pasos:

### Requisitos Previos

- **Node.js** >= 20
- **npm** (incluido con Node.js)
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)

### Paso 1: Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd PruebaTecnica
```

### Paso 2: Instalar dependencias

```bash
npm install
```

### Paso 3: Iniciar la aplicación web

```bash
npm run web
```

✅ **La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)**

### Paso 4: Probar las funcionalidades

1. **Crear post** — Usar el formulario superior
2. **Filtrar** — Escribir en el campo de búsqueda  
3. **Eliminar** — Hacer clic en el botón 🗑️ de cualquier post
4. Los datos se cargan automáticamente al abrir la página

### Scripts Disponibles

```bash
npm run web          # Servidor de desarrollo (puerto 3000)
npm run build:web    # Build para producción
npm run lint         # Verificar código con ESLint
npm test             # Ejecutar tests con Jest
```

---

## Tecnologías Utilizadas

| Herramienta         | Versión  | Propósito                    |
| ------------------- | -------- | ---------------------------- |
| React               | 19.2.0   | Biblioteca de UI             |
| React Native        | 0.83.1   | Framework móvil              |
| React Native Web    | latest   | Soporte web para RN          |
| Redux Toolkit       | ^2.11.2  | Gestión de estado            |
| TypeScript          | ^5.8.3   | Tipado estático              |
| Vite                | ^7.3.1   | Bundler y dev server         |
