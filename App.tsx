/**
 * Posts App - React Native con Redux Toolkit (NgRx-style)
 * Aplicación para gestionar Posts con CRUD y filtrado
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {useAppDispatch} from './src/store/hooks';
import {loadPosts} from './src/features/posts/posts.slice';
import {PostForm, PostFilter, PostList} from './src/components';

/**
 * App Component - Componente principal con Provider de Redux
 */
function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
}

/**
 * AppContent Component - Contenido principal de la aplicación
 * Estructura: Formulario → Filtro → Lista
 */
function AppContent() {
  const dispatch = useAppDispatch();

  // Cargar posts iniciales desde el servicio emulado
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Crud TCIT</Text>
     
        </View>

        {/* Main Content */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          {/* 1. Formulario */}
          <PostForm />

          {/* 2. Filtro */}
          <PostFilter />

          {/* 3. Lista */}
          <PostList />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
});

export default App;
