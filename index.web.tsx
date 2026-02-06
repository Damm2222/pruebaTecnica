import React from 'react';
import {createRoot} from 'react-dom/client';
import {AppRegistry} from 'react-native-web';
import App from './App';

// Registrar el componente
AppRegistry.registerComponent('App', () => App);

// Obtener el elemento para renderizar
const rootTag = document.getElementById('root');
if (rootTag) {
  const {element} = AppRegistry.getApplication('App', {});
  const root = createRoot(rootTag);
  root.render(element);
}
