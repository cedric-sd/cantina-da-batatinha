import React, { useState } from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { Divider, TextInput } from 'react-native-paper';
import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

const backgroundImg = { uri: "https://github.com/cedric-sd/cantina-da-batatinha/blob/main/src/assets/images/backgroundPerfil.png?raw=true" };

const Perfil = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCEP] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <StatusBar 
          //translucent={true} 
          backgroundColor='#f1f1f1'
          barStyle={'dark-content'}
        />
        {/* <BorderlessButton>
          <Feather name="arrow-left" size={24} color="#cf2558" />
        </BorderlessButton> */}
        <View style={styles.titleView}>
        
          <Text style={styles.textTitle}>
            Meu perfil
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.avatarWrapper}>
          <Image
            source={backgroundImg}
            style={styles.imageBackground}
          />
          <View style={styles.avatarImg}>
            <View style={styles.wrapAddImage}>
              <FontAwesome name="user-o" size={35} color="#808080" />
            </View>
            <RectButton
              rippleColor='#fff'
              style={styles.buttonAddImage}>
                <Feather name="camera" size={24} color="#cf423b" />
            </RectButton>
          </View>
          <Text style={styles.perfilName}>Meu nome</Text>
        </View>

        <View style={styles.containerPerfil}>
          <Text style={styles.titleType}>Meus dados</Text>
          <Divider />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Nome"
            value={nome}
            onChangeText={nome => setNome(nome)}
          />
          
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Sobrenome"
            value={sobrenome}
            onChangeText={sobrenome => setSobrenome(sobrenome)}
          />
          
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          
          <Text style={styles.titleType}>Endereço</Text>
          <Divider />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="CEP"
            value={cep}
            onChangeText={cep => setCEP(cep)}
          />
          
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Rua"
            value={rua}
            onChangeText={rua => setRua(rua)}
          />
          
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Bairro"
            value={bairro}
            onChangeText={bairro => setBairro(bairro)}
          />

          <View style={styles.groupInput}>
            <TextInput
              style={[styles.input, { width: '50%' }]}
              mode="outlined"
              label="Complemento"
              value={complemento}
              onChangeText={complemento => setComplemento(complemento)}
            />

            <TextInput
              style={[styles.input, { width: '50%' }]}
              mode="outlined"
              label="Numero"
              value={numero}
              onChangeText={numero => setNumero(numero)}
            />
          </View>

          <View style={styles.confirmButtonArea}>
            <RectButton
              style={styles.confirmButton}
              rippleColor="#ccc"
            >
              <Text style={styles.labelConfirmButton}>Salvar alterações</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Perfil;
