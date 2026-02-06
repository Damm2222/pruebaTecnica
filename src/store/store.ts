import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../features/posts/posts.slice';

/**
 * Redux Store configurado al estilo NgRx
 * Centraliza todo el estado de la aplicación
 */
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
