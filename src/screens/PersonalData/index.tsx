import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

const PersonalData = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        translucent={false}
        backgroundColor='#f1f1f1'
        barStyle={'dark-content'}
      />
      <Text>ok</Text>
    </View>
  );
}

export default PersonalData;
