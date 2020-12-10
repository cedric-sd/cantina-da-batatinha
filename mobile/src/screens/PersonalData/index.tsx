import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StatusBar, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { TextInput, Divider } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
//my components
import Address from '../../components/Address';

import styles from './styles';
import { Modalize } from 'react-native-modalize';

const addressInfo = {
  cep: "60915-065",
  rua: "São João",
  numero: "18",
  bairro: "Jacanaú",
  complemento: "casa"
}

const PersonalData = () => {
  const modalizeRef = useRef<Modalize>();

  const navigation = useNavigation();
  
  const [cep, setCEP] = useState(addressInfo.cep);
  const [rua, setRua] = useState(addressInfo.rua);
  const [numero, setNumero] = useState(addressInfo.numero);
  const [bairro, setBairro] = useState(addressInfo.bairro);
  const [complemento, setComplemento] = useState(addressInfo.complemento);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleConfirmPersonalData = () => {
    navigation.navigate('Success');
  }

  const handleConfirmAddress = () => {
    //simulando chamada a api que vai ser criada
    const info = {
      cep: "60915-123",
      rua: "São Francisco",
      numero: "61",
      bairro: "Guabiraba",
      complemento: "casa"
    }

    setCEP(info.cep);
    setRua(info.rua);
    setNumero(info.numero);
    setBairro(info.bairro);
    setComplemento(info.complemento);

    //[TO DO] Salvar em um local storage ou enviar pra api

    modalizeRef.current?.close();
  }

  // useEffect(() => {
  // }, [cep, rua, numero, bairro, complemento])

  return (
    <View style={styles.container}>
      <StatusBar 
        translucent={false}
        backgroundColor='#f1f1f1'
        barStyle={'dark-content'}
      />
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => {

        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Nome"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Whatsapp"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            {/*<TextInput
              style={styles.input}
              mode="outlined"
              label="Nome"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Nome"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            /> */}            
            <View style={styles.addressWrapper}>
              <View style={styles.addressRow}>
                <Text style={styles.textTitleAddress}>Endereço</Text>
                <BorderlessButton
                  onPress={() => {modalizeRef.current?.open()}}
                >
                  <Feather name="edit" size={24} color="#cf423b" />
                </BorderlessButton>
              </View>

              <View style={styles.addressRow}>
                <Text style={styles.textAddress}>CEP: {cep}</Text>
              </View>
              
              <View style={styles.addressRow}>
                <Text style={styles.textAddress}>Rua: {rua}</Text>
                <Text style={styles.textAddress}>Numero: {numero}</Text>
              </View>
              
              <View style={styles.addressRow}>
                <Text style={styles.textAddress}>Bairro: {bairro}</Text>
                <Text style={styles.textAddress}>Compelemento: {complemento}</Text>
              </View>
              
              <View style={styles.containerAddress}>
                <Text style={styles.labelSwitch}>Continuar usando este endereço</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#cf2558" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            <RectButton
              rippleColor='#ddd'
              style={styles.confirmData}
              onPress={handleConfirmPersonalData}>
              <Text 
                style={styles.labelDataButton}
              >
                Finalizar pedido 
              </Text>
            </RectButton>
          </View>
        )}

      </Formik>
      
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight={true}
        handlePosition="outside"
        // HeaderComponent={
        //   <Text>titulo</Text>
        // }
      >
        <Address
          cep={cep}
          rua={rua}
          numero={numero}
          bairro={bairro}
          complemento={complemento}
        >
          <RectButton
            rippleColor='#ddd'
            style={styles.confirmAddress}
            onPress={handleConfirmAddress}
          >
            <Text 
              style={styles.labelAddressButton}>
              Confirmar endereço da entrega
            </Text>
          </RectButton>
        </Address>
      </Modalize>

    </View>
  );
}

export default PersonalData;
