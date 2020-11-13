import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

import Routes from './src/Routes';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    accent: '#cf2558',
  },
};

const App = () => {
  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: props => <Feather {...props} />,
      }}
    >
      <Routes />
    </PaperProvider>    
  );
}

export default App;
