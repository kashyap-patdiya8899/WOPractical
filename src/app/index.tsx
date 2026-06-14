import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { persistor, store } from '@WOPractical/store/store';
import React, { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import navigationRef from './navigationRef';
import RootStack from './stack';


const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer ref={navigationRef}>
            <Suspense fallback={<ActivityIndicator size="large" />}>
              <RootStack />
            </Suspense>
          </NavigationContainer>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}