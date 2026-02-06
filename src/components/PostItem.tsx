import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform, Alert} from 'react-native';
import {Post} from '../models/post.model';

interface PostItemProps {
  post: Post;
  onDelete: (id: string) => void;
}

/**
 * PostItem Component - Muestra un post individual
 */
export const PostItem: React.FC<PostItemProps> = ({post, onDelete}) => {
  const handleDelete = () => {
    if (Platform.OS === 'web' && typeof globalThis !== 'undefined' && 'window' in globalThis) {
      // window.confirm funciona en navegadores; Alert.alert no está soportado en web
      const confirmed = (globalThis as any).window.confirm(`¿Estás seguro de eliminar "${post.name}"?`);
      if (confirmed) {
        onDelete(post.id);
      }
    } else {
      Alert.alert(
        'Eliminar Post',
        `¿Estás seguro de eliminar "${post.name}"?`,
        [
          {text: 'Cancelar', style: 'cancel'},
          {
            text: 'Eliminar',
            style: 'destructive',
            onPress: () => onDelete(post.id),
          },
        ],
      );
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{post.name}</Text>
        <Text style={styles.description}>{post.description}</Text>
        <Text style={styles.date}>📅 {formatDate(post.createdAt)}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#999999',
  },
  deleteButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 20,
  },
});
