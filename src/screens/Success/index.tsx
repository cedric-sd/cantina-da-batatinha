import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';

const backgroundImg = { uri: "https://github.com/cedric-sd/cantina-da-batatinha/blob/main/assets/favicon.png?raw=true" };

const Success = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.image}>
        <Text>ok</Text>
      </ImageBackground>
    </View>
  );
}

export default Success;
