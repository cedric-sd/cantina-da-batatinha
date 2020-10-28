import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

import Routes from './src/Routes';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <Feather {...props} />,
      }}
    >
      <Routes />
    </PaperProvider>    
  );
}

export default App;
