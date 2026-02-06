import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useAppDispatch} from '../store/hooks';
import {addPost} from '../features/posts/posts.slice';

/**
 * PostForm Component - Formulario para crear posts
 */
export const PostForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({name: '', description: ''});

  const validate = (): boolean => {
    const newErrors = {name: '', description: ''};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = 'El nombre es requerido';
      isValid = false;
    } else if (name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
      isValid = false;
    }

    if (!description.trim()) {
      newErrors.description = 'La descripción es requerida';
      isValid = false;
    } else if (description.trim().length < 10) {
      newErrors.description =
        'La descripción debe tener al menos 10 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      dispatch(addPost({name: name.trim(), description: description.trim()}));
      setName('');
      setDescription('');
      setErrors({name: '', description: ''});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Nuevo Post</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={[styles.input, errors.name ? styles.inputError : null]}
          placeholder="Ingresa el nombre del post"
          placeholderTextColor="#999"
          value={name}
          onChangeText={text => {
            setName(text);
            if (errors.name) {
              setErrors({...errors, name: ''});
            }
          }}
          maxLength={100}
        />
        {errors.name ? (
          <Text style={styles.errorText}>{errors.name}</Text>
        ) : null}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[
            styles.input,
            styles.textArea,
            errors.description ? styles.inputError : null,
          ]}
          placeholder="Ingresa la descripción del post"
          placeholderTextColor="#999"
          value={description}
          onChangeText={text => {
            setDescription(text);
            if (errors.description) {
              setErrors({...errors, description: ''});
            }
          }}
          multiline
          numberOfLines={3}
          maxLength={500}
        />
        {errors.description ? (
          <Text style={styles.errorText}>{errors.description}</Text>
        ) : null}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>➕ Agregar Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1a1a1a',
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
