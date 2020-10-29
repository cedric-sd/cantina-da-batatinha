import React from 'react';
import { View, ImageBackground, Text, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const backgroundImg = { uri: "https://github.com/cedric-sd/cantina-da-batatinha/blob/main/src/assets/images/background.png?raw=true" };

const Success = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        translucent={false}
        backgroundColor='#7a1533'
        barStyle={'light-content'}
      />
      <ImageBackground source={backgroundImg} style={styles.image}>
        <LottieView
          autoPlay
          loop={false}
          style={styles.animation}
          source={require('../../assets/animations/successAnimation.json')}
        />
        <View style={styles.contentWrapper}>
          <Text style={styles.titleText}>Pedido realizado!</Text>
          <RectButton
            rippleColor="#b6ebce"
            style={styles.buttonFinish}
          >
            <Text style={styles.labelButton}>Acompanhe o pedido pelo whatsapp</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Success;
