import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';
import {Post} from '../../models/post.model';

/**
 * Selectors - Equivalente a NgRx Selectors
 * Optimizados con memoización
 */

// Selector base del estado de posts
const selectPostsState = (state: RootState) => state.posts;

// Selector para obtener todos los posts
export const selectAllPosts = createSelector(
  [selectPostsState],
  postsState => postsState.posts,
);

// Selector para obtener el post seleccionado
export const selectSelectedPost = createSelector(
  [selectPostsState],
  postsState => postsState.selectedPost,
);

// Selector para obtener el estado de carga
export const selectPostsLoading = createSelector(
  [selectPostsState],
  postsState => postsState.loading,
);

// Selector para obtener errores
export const selectPostsError = createSelector(
  [selectPostsState],
  postsState => postsState.error,
);

// Selector para obtener la cantidad de posts
export const selectPostsCount = createSelector(
  [selectAllPosts],
  posts => posts.length,
);

// Selector para obtener un post por ID
export const selectPostById = (postId: string) =>
  createSelector([selectAllPosts], (posts: Post[]) =>
    posts.find((post: Post) => post.id === postId),
  );

// Selector para obtener posts ordenados por fecha (más recientes primero)
export const selectPostsSortedByDate = createSelector(
  [selectAllPosts],
  posts =>
    [...posts].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    ),
);

// Selector para obtener el filtro de búsqueda
export const selectSearchFilter = createSelector(
  [selectPostsState],
  postsState => postsState.searchFilter,
);

// Selector para obtener posts filtrados por nombre
export const selectFilteredPosts = createSelector(
  [selectPostsSortedByDate, selectSearchFilter],
  (posts, filter) => {
    if (!filter.trim()) {
      return posts;
    }
    return posts.filter(post =>
      post.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

// Selector para obtener cantidad de posts filtrados
export const selectFilteredPostsCount = createSelector(
  [selectFilteredPosts],
  posts => posts.length,
);
