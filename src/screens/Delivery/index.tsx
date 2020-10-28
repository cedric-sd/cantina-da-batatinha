import React, { useState } from 'react';
import { View, Text, StatusBar, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import MapView from 'react-native-maps';
import { FAB, TextInput } from 'react-native-paper';

import styles from './styles';

const Delivery = () => {
  const navigation = useNavigation();
  const [cep, setCEP] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  
  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleConfirmAddress = () => {
    navigation.navigate('PersonalData');
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        translucent={true}
        backgroundColor='rgba(0,0,0,0)'
        barStyle={'dark-content'}
      />

      <MapView 
        initialRegion={{
          latitude: -3.8416544,
          longitude: -38.635505,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle} 
      />

      <View style={styles.headerDelivery}>
        <FAB 
          style={styles.fab}
          small
          icon="chevron-left"
          onPress={handleGoBack}
        />
      </View>
      
      <View style={styles.addressWrapper}>
        <View style={styles.address}>
          <View style={styles.formAddress}>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="CEP"
              value={cep}
              onChangeText={text => setCEP(text)}
            />
            
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Rua"
              value={rua}
              onChangeText={text => setRua(text)}
            />
            <View style={styles.inlineNumberBairro}>  
              <TextInput
                style={[styles.input, { width: '50%' }]}
                mode="outlined"
                label="Número"
                value={numero}
                onChangeText={text => setNumero(text)}
              />
              <TextInput
                style={[styles.input, { width: '50%' }]}
                mode="outlined"
                label="Bairro"
                value={bairro}
                onChangeText={text => setBairro(text)}
              />
            </View>
            
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Complemento"
              value={complemento}
              onChangeText={text => setComplemento(text)}
            />
          </View>

          <RectButton
            rippleColor='#ddd'
            style={styles.confirmAddress}
            onPress={handleConfirmAddress}>
            <Text 
              style={styles.labelAddressButton}
            >
              Confirmar endereço da entrega
            </Text>
          </RectButton>
        </View>
      </View>
          
    </View>
  )
};

export default Delivery;
        