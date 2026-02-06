# Posts App — React Native Web

Aplicación web hecha con **React Native** y **React Native Web** para gestionar Posts, usando **Redux Toolkit** como gestor de estado.

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

## Arquitectura del Proyecto

```
src/
├── models/
│   └── post.model.ts            # Interfaces: Post, CreatePostDto
├── services/
│   └── postService.ts           # Servicio que emula una API REST (sin backend)
├── store/
│   ├── store.ts                 # Store principal de Redux
│   └── hooks.ts                 # Hooks tipados (useAppDispatch, useAppSelector)
├── features/
│   └── posts/
│       ├── posts.slice.ts       # Slice con async thunks (loadPosts, addPost, deletePost)
│       └── posts.selectors.ts   # Selectors memoizados con Reselect
└── components/
    ├── index.ts                 # Barrel de exports
    ├── PostForm.tsx             # Formulario de creación
    ├── PostFilter.tsx           # Filtro por nombre
    ├── PostList.tsx             # Lista de posts
    └── PostItem.tsx             # Item individual con botón de eliminar
```

### Servicio Emulado (sin Backend)

El archivo `src/services/postService.ts` simula llamadas a una API REST con latencia de red:

- `fetchPosts()` — emula `GET /api/posts` y retorna posts semilla.
- `createPost(dto)` — emula `POST /api/posts` generando id y fecha.
- `deletePostById(id)` — emula `DELETE /api/posts/:id`.

Los datos iniciales se cargan automáticamente al iniciar la app mediante un `createAsyncThunk`.

---

## Levantar el Ambiente de Desarrollo

### Requisitos Previos

- **Node.js** >= 20
- **npm** (incluido con Node.js)

### Paso 1: Clonar el repositorio

```sh
git clone <url-del-repositorio>
cd PruebaTecnica
```

### Paso 2: Instalar dependencias

```sh
npm install
```

### Paso 3: Iniciar la aplicación web

```sh
npm run web
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000).

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
