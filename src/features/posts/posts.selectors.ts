import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';

/**
 * Selectors - Equivalentes a NgRx Selectors
 * Optimizados con memoización via Reselect
 */

// Selector base del estado de posts
const selectPostsState = (state: RootState) => state.posts;

// Selector para obtener todos los posts
export const selectAllPosts = createSelector(
  [selectPostsState],
  postsState => postsState.posts,
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

// Selector para obtener la cantidad total de posts
export const selectPostsCount = createSelector(
  [selectAllPosts],
  posts => posts.length,
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
