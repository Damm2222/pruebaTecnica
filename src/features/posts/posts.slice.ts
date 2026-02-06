import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Post, CreatePostDto, UpdatePostDto} from '../../models/post.model';

/**
 * Posts State - Estructura del estado al estilo NgRx
 */
interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  selectedPost: Post | null;
  searchFilter: string;
}

/**
 * Estado inicial
 */
const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  selectedPost: null,
  searchFilter: '',
};

/**
 * Posts Slice - Equivalente a NgRx Store + Actions + Reducer
 * Maneja todas las operaciones CRUD de Posts
 */
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // CREATE - Agregar nuevo post
    addPost: (state, action: PayloadAction<CreatePostDto>) => {
      const newPost: Post = {
        id: Date.now().toString(),
        name: action.payload.name,
        description: action.payload.description,
        createdAt: new Date().toISOString(),
      };
      state.posts.push(newPost);
    },

    // READ - Seleccionar post
    selectPost: (state, action: PayloadAction<string>) => {
      const post = state.posts.find(p => p.id === action.payload);
      state.selectedPost = post || null;
    },

    // UPDATE - Actualizar post existente
    updatePost: (state, action: PayloadAction<UpdatePostDto>) => {
      const index = state.posts.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = {
          ...state.posts[index],
          name: action.payload.name,
          description: action.payload.description,
        };
      }
    },

    // DELETE - Eliminar post
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(p => p.id !== action.payload);
      if (state.selectedPost?.id === action.payload) {
        state.selectedPost = null;
      }
    },

    // Limpiar selección
    clearSelection: state => {
      state.selectedPost = null;
    },

    // FILTER - Establecer filtro de búsqueda
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.searchFilter = action.payload;
    },

    // Limpiar filtro de búsqueda
    clearSearchFilter: state => {
      state.searchFilter = '';
    },

    // Manejo de errores
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Limpiar error
    clearError: state => {
      state.error = null;
    },
  },
});

// Exportar actions (equivalente a NgRx Actions)
export const {
  addPost,
  selectPost,
  updatePost,
  deletePost,
  clearSelection,
  setSearchFilter,
  clearSearchFilter,
  setError,
  clearError,
} = postsSlice.actions;

// Exportar reducer (equivalente a NgRx Reducer)
export default postsSlice.reducer;
