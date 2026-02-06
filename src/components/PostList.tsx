import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {deletePost} from '../features/posts/posts.slice';
import {
  selectFilteredPosts,
  selectSearchFilter,
} from '../features/posts/posts.selectors';
import {PostItem} from './PostItem';

/**
 * PostList Component - Lista de posts
 */
export const PostList: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectFilteredPosts);
  const searchFilter = useAppSelector(selectSearchFilter);

  const handleDeletePost = (id: string) => {
    dispatch(deletePost(id));
  };

  const renderEmptyState = () => (
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
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Lista de Posts</Text>

      {posts.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PostItem post={item} onDelete={handleDeletePost} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
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
