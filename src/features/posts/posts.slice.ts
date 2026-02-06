import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Post, CreatePostDto} from '../../models/post.model';
import * as postService from '../../services/postService';

/**
 * Posts State - Estructura del estado al estilo NgRx
 */
interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  searchFilter: string;
}

/**
 * Estado inicial
 */
const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  searchFilter: '',
};

// ── Async Thunks (emulan llamadas a una API REST) ──────────────

/** GET /api/posts - Cargar posts iniciales desde el servicio */
export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
  return await postService.fetchPosts();
});

/** POST /api/posts - Crear un nuevo post a través del servicio */
export const addPost = createAsyncThunk(
  'posts/addPost',
  async (dto: CreatePostDto) => {
    return await postService.createPost(dto);
  },
);

/** DELETE /api/posts/:id - Eliminar un post a través del servicio */
export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: string) => {
    return await postService.deletePostById(id);
  },
);

// ── Slice ──────────────────────────────────────────────────────

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // FILTER - Establecer filtro de búsqueda
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.searchFilter = action.payload;
    },

    // Limpiar filtro de búsqueda
    clearSearchFilter: state => {
      state.searchFilter = '';
    },

    // Limpiar error
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    // ── loadPosts ──
    builder
      .addCase(loadPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error al cargar los posts';
      });

    // ── addPost ──
    builder
      .addCase(addPost.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error al crear el post';
      });

    // ── deletePost ──
    builder
      .addCase(deletePost.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter(p => p.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error al eliminar el post';
      });
  },
});

// Exportar actions
export const {setSearchFilter, clearSearchFilter, clearError} =
  postsSlice.actions;

// Exportar reducer
export default postsSlice.reducer;
