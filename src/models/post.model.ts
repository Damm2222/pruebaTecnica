/**
 * Post Model
 * Siguiendo buenas prácticas con camelCase para TypeScript/JavaScript
 */
export interface Post {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface CreatePostDto {
  name: string;
  description: string;
}

export interface UpdatePostDto {
  id: string;
  name: string;
  description: string;
}
