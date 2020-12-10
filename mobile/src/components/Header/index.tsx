import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';

import styles from './styles';

interface HeaderProps extends StackHeaderProps {
  title: string;
  subtitle: string;
  showSearchInput?: boolean;
}

const Header = ({ title, subtitle, showSearchInput }: HeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        //translucent={true} 
        backgroundColor='#f1f1f1'
        barStyle={'dark-content'}
      />

      { showSearchInput ? 
        (
          <View
            style={styles.inputSearch} >
            <TextInput
              style={styles.inputSearchText}
              placeholder='O que está procurando?'
              // onChangeText={text => onChangeText(text)}
              //value={}
            ></TextInput>
          </View>
        ) :
        (
          <>
            <BorderlessButton onPress={handleGoBack}>
            <Feather name="arrow-left" size={30} color="#cf2558" />
            </BorderlessButton>
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                {title}
              </Text>
              <Text style={styles.textSubtitle}>
                {subtitle}
              </Text>
            </View>
          </>
        )
      }

    </View>
  );
};

export default Header;
