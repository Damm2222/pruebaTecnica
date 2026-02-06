import {Post, CreatePostDto} from '../models/post.model';

/**
 * PostService - Servicio que emula la recepción de posts desde una API REST.
 * No hay backend real; los datos se generan en memoria simulando
 * latencia de red y respuestas JSON en camelCase.
 */

/** Datos semilla que simulan registros existentes en la "API" */
const seedPosts: Post[] = [
  {
    id: '1',
    name: 'prueba técnica',
    description:
      'React Native permite crear aplicaciones móviles nativas usando JavaScript y React. Es una herramienta poderosa para el desarrollo multiplataforma.',
    createdAt: '2026-02-01T10:00:00.000Z',
  },

];

/**
 * Simula un retardo de red (latencia).
 * @param ms - Milisegundos de espera (por defecto entre 300 y 800 ms).
 */
const simulateNetworkDelay = (ms?: number): Promise<void> => {
  const delay = ms ?? Math.floor(Math.random() * 500) + 300;
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * GET /api/posts – Obtener todos los posts.
 * Emula la respuesta JSON de una API REST.
 */
export const fetchPosts = async (): Promise<Post[]> => {
  await simulateNetworkDelay();
  // Retorna una copia profunda para emular datos que llegan desde la red
  return JSON.parse(JSON.stringify(seedPosts));
};

/**
 * POST /api/posts – Crear un nuevo post.
 * Emula la creación en el servidor y devuelve el post con id y fecha.
 */
export const createPost = async (dto: CreatePostDto): Promise<Post> => {
  await simulateNetworkDelay();
  const newPost: Post = {
    id: Date.now().toString(),
    name: dto.name,
    description: dto.description,
    createdAt: new Date().toISOString(),
  };
  return newPost;
};

/**
 * DELETE /api/posts/:id – Eliminar un post por ID.
 * Emula la eliminación en el servidor y retorna el id eliminado.
 */
export const deletePostById = async (id: string): Promise<string> => {
  await simulateNetworkDelay(200);
  return id;
};
