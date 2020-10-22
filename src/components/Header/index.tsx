import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';

const Header = () => {
  //const [value, onChangeText] = React.useState('pesquisar');

  return (
    <View style={styles.container}>
      {/* <Text> Header</Text> */}
      <StatusBar 
        //translucent={true} 
        backgroundColor={'#f1f1f1'} 
        barStyle={'dark-content'}
      />

      <BorderlessButton>  
        <FontAwesome5 
          name="angle-left" 
          size={30} 
          color="#cf2558" 
        />
      </BorderlessButton>

      <TextInput
        style={styles.inputSearch}
        placeholder='O que está procurando?'
        // onChangeText={text => onChangeText(text)}
        //value={}
      />

    </View>
  );
};

export default Header;
