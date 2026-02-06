import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {deletePost} from '../features/posts/posts.slice';
import {
  selectFilteredPosts,
  selectSearchFilter,
  selectPostsLoading,
} from '../features/posts/posts.selectors';
import {PostItem} from './PostItem';

/**
 * PostList Component - Lista de posts con soporte de carga y estado vacío
 */
export const PostList: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectFilteredPosts);
  const searchFilter = useAppSelector(selectSearchFilter);
  const loading = useAppSelector(selectPostsLoading);

  const handleDeletePost = (id: string) => {
    dispatch(deletePost(id));
  };

  if (loading && posts.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>📋 Lista de Posts</Text>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>⏳</Text>
          <Text style={styles.emptyTitle}>Cargando posts…</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Lista de Posts</Text>

      {posts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>
            {searchFilter ? '🔍' : '📭'}
          </Text>
          <Text style={styles.emptyTitle}>
            {searchFilter ? 'Sin resultados' : 'No hay posts aún'}
          </Text>
          <Text style={styles.emptyText}>
            {searchFilter
              ? `No se encontraron posts con "${searchFilter}"`
              : 'Crea tu primer post usando el formulario de arriba'}
          </Text>
        </View>
      ) : (
        posts.map(post => (
          <PostItem key={post.id} post={post} onDelete={handleDeletePost} />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    lineHeight: 20,
  },
});
