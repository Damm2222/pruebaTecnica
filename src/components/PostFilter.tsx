import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {setSearchFilter} from '../features/posts/posts.slice';
import {
  selectSearchFilter,
  selectPostsCount,
  selectFilteredPostsCount,
} from '../features/posts/posts.selectors';

/**
 * PostFilter Component - Filtro para buscar posts por nombre
 */
export const PostFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchFilter = useAppSelector(selectSearchFilter);
  const totalCount = useAppSelector(selectPostsCount);
  const filteredCount = useAppSelector(selectFilteredPostsCount);

  return (
    <View style={styles.container}>
      <View style={styles.filterRow}>
        <View style={styles.inputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.input}
            placeholder="Filtrar por nombre..."
            placeholderTextColor="#999"
            value={searchFilter}
            onChangeText={text => dispatch(setSearchFilter(text))}
          />
          {searchFilter ? (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => dispatch(setSearchFilter(''))}>
              <Text style={styles.clearButtonText}>✕</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {searchFilter
            ? `Mostrando ${filteredCount} de ${totalCount} posts`
            : `Total: ${totalCount} posts`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#1a1a1a',
  },
  clearButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
  },
  countContainer: {
    marginTop: 8,
    alignItems: 'center',
  },
  countText: {
    fontSize: 13,
    color: '#666666',
  },
});
