This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

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

## Libraries Used

```sh
@react-native-community/netinfo – Network connectivity monitoring and internet status detection.
@react-navigation/native – Core navigation library for React Native.
@react-navigation/native-stack – Native stack navigator for screen navigation.
@react-navigation/bottom-tabs – Bottom tab navigation implementation.
@reduxjs/toolkit – Simplified and scalable Redux state management.
react-redux – React bindings for Redux state management.
redux-persist – Persists Redux state across app restarts.
@tanstack/react-query – Data fetching, caching, pagination, and server state management.
axios – Promise-based HTTP client for API communication.
react-native-mmkv – High-performance local key-value storage.
react-native-quick-sqlite – SQLite database integration for persisting favourite characters locally.
```

## Project Features

```sh
Character listing with infinite scrolling.
Search characters by name.
Filter characters by status and gender.
Header auto hide-show header.
Character detail screen.
Episode listing grouped by season.
Episode detail screen.
Location listing.
Location detail screen with residents.
Favourite character management persisted in SQLite.
Skeleton loaders for improved loading experience.
```