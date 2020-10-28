import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { TextInput } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const PersonalData = () => {
  const navigation = useNavigation();
  const [personalData, setPersonalData] = useState([]);

  const handleConfirmPersonalData = () => {
    navigation.navigate('Success');
  }

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
            />
            
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Nome"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            
            <View style={styles.addressWrapper}>
              <View style={styles.addressRow}>
                <Text style={styles.textTitleAddress}>Endereço</Text>
                <BorderlessButton>
                  <Feather name="edit" size={24} color="#cf423b" />
                </BorderlessButton>
              </View>
              
              <View style={styles.addressRow}>
                <Text style={styles.textAddress}>CEP: 00000-000</Text>
              </View>
              
              <View style={styles.addressRow}>
                <Text style={styles.textAddress}>Rua: Rua das flores</Text>
                <Text style={styles.textAddress}>Numero: 10</Text>
              </View>
              
              <View style={styles.addressRow}>
                <Text style={styles.textAddress}>Bairro: Bairro fg</Text>
                <Text style={styles.textAddress}>Compelemento: ?</Text>
              </View>
              
              <View style={styles.containerButtonAddress}>
                <RectButton
                  rippleColor='#fc7d4a'
                  style={styles.addressButton}>
                    <Text style={styles.labelAddress}>Usar como meu enderço padrão</Text>
                </RectButton>
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
    </View>
  );
}

export default PersonalData;
