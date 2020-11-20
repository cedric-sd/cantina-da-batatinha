import React, { Children, ReactChild, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { TextInput } from 'react-native-paper';

import styles from './styles';

interface IProp {
  cep: string,
  rua: string,
  numero: string,
  bairro: string,
  complemento: string,
  children: ReactChild
}
const Address = ({cep, rua, numero, bairro, complemento, children}: IProp) => {
  const navigation = useNavigation();

  const [inputCEP, setInputCEP] = useState(cep);
  const [inputRua, setInputRua] = useState(rua);
  const [inputNumero, setInputNumero] = useState(numero);
  const [inputBairro, setInputBairro] = useState(bairro);
  const [inputComplemento, setInputComplemento] = useState(complemento);

  useEffect(() => {
    setInputCEP(cep);
    setInputRua(rua);
    setInputNumero(numero);
    setInputBairro(bairro);
    setInputComplemento(complemento);

  }, [cep, rua, numero, bairro, complemento]);

  return (
    <View style={styles.address}>
      <View style={styles.formAddress}>
        <TextInput
          style={styles.input}
          underlineColor="#cf2558"
          mode="outlined"
          label="CEP"
          value={inputCEP}
          onChangeText={text => setInputCEP(text)}//[TO DO]https://viacep.com.br/
        />
        
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Rua"
          value={inputRua}
          onChangeText={text => setInputRua(text)}
        />
        <View style={styles.inlineNumberBairro}>
          <TextInput
            style={[styles.input, { width: '50%' }]}
            mode="outlined"
            label="Número"
            value={inputNumero}
            onChangeText={text => setInputNumero(text)}
          />
          <TextInput
            style={[styles.input, { width: '50%' }]}
            mode="outlined"
            label="Bairro"
            value={inputBairro}
            onChangeText={text => setInputBairro(text)}
          />
        </View>
        
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Complemento"
          value={inputComplemento}
          onChangeText={text => setInputComplemento(text)}
        />
      </View>
      { children }
    </View>
  )
}

export default Address;
