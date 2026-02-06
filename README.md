# Posts App - React Native con NgRx

Aplicación React Native para gestionar Posts usando Redux Toolkit con arquitectura tipo NgRx.

## 🚀 Características

- ✅ React Native 0.83.1 con TypeScript
- ✅ Redux Toolkit (arquitectura tipo NgRx)
- ✅ CRUD completo de Posts (Crear, Leer, Actualizar, Eliminar)
- ✅ Arquitectura limpia y escalable
- ✅ Buenas prácticas con camelCase

## 📁 Estructura del Proyecto

```
PruebaTecnica/
├── src/
│   ├── models/              # Modelos de datos (interfaces TypeScript)
│   │   └── post.model.ts
│   ├── store/               # Configuración del Store Redux
│   │   ├── store.ts         # Store principal
│   │   └── hooks.ts         # Hooks tipados
│   ├── features/            # Features organizados por dominio
│   │   └── posts/
│   │       ├── posts.slice.ts      # Actions + Reducer (NgRx-style)
│   │       └── posts.selectors.ts  # Selectors memoizados
│   └── components/          # Componentes de UI
│       ├── PostList.tsx     # Lista de posts
│       ├── PostItem.tsx     # Item individual
│       └── PostForm.tsx     # Formulario crear/editar
├── App.tsx                  # Componente raíz con Provider
└── package.json
```

## 🏗️ Arquitectura NgRx

### State Management (Redux Toolkit)

**Store** (`src/store/store.ts`)
- Configuración centralizada del estado global
- Types para RootState y AppDispatch

**Slice** (`src/features/posts/posts.slice.ts`)
- Combina Actions + Reducer al estilo NgRx
- Actions: `addPost`, `updatePost`, `deletePost`, `selectPost`
- Estado inmutable con Immer

**Selectors** (`src/features/posts/posts.selectors.ts`)
- Selectors memoizados con Reselect
- `selectAllPosts`, `selectPostsSortedByDate`, `selectPostsCount`
- Optimización de renderizado

### Modelo de Datos

```typescript
interface Post {
  id: string;
  name: string;           // camelCase ✅
  description: string;    // camelCase ✅
  createdAt: string;
}
```

## 📱 Funcionalidades

1. **Listar Posts**: Vista de todos los posts ordenados por fecha
2. **Crear Post**: Formulario modal con validaciones
3. **Editar Post**: Modificar posts existentes
4. **Eliminar Post**: Eliminar posts con confirmación visual
5. **Validaciones**: Nombre mínimo 3 caracteres, descripción mínimo 10

## 🎨 UI/UX

- Diseño moderno con Material Design
- FAB (Floating Action Button) para crear posts
- Modal para formularios
- Estados vacíos informativos
- Contador de posts en el header
- Animaciones suaves

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install Dependencies

```sh
npm install
```

## Step 2: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
npm start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
npm run android
```

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
# pruebaTecnica
