import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

const Historic = () => {
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
            Histórico
          </Text>
        </View>
      </View>
      
      <ScrollView>
        
      <View>
          <RectButton
            rippleColor='#ccc'
            style={styles.containerOption} >
            <View style={styles.optionHistoric}>
              <FontAwesome name="cutlery" size={24} color="#7a1533" />
              <Text style={styles.optionTitle}>Cardápio do dia</Text>
              <View style={styles.dataHistoric}>
                <Text>30/10/2020</Text>
                <Text style={styles.labelPrice}>R$ 20,00</Text>
              </View>
              <Feather name="chevron-right" size={24} color="#7a1533" />
            </View>
          </RectButton>
          <View style={styles.divider}></View>
        </View>
        
        <View>
          <RectButton
            rippleColor='#ccc'
            style={styles.containerOption} >
            <View style={styles.optionHistoric}>
              <FontAwesome name="cutlery" size={24} color="#7a1533" />
              <Text style={styles.optionTitle}>Cardápio do dia</Text>
              <View style={styles.dataHistoric}>
                <Text>30/10/2020</Text>
                <Text style={styles.labelPrice}>R$ 20,00</Text>
              </View>
              <Feather name="chevron-right" size={24} color="#7a1533" />
            </View>
          </RectButton>
          <View style={styles.divider}></View>
        </View>
        
        <View>
          <RectButton
            rippleColor='#ccc'
            style={styles.containerOption} >
            <View style={styles.optionHistoric}>
              <FontAwesome name="cutlery" size={24} color="#7a1533" />
              <Text style={styles.optionTitle}>Cardápio do dia</Text>
              <View style={styles.dataHistoric}>
                <Text>30/10/2020</Text>
                <Text style={styles.labelPrice}>R$ 20,00</Text>
              </View>
              <Feather name="chevron-right" size={24} color="#7a1533" />
            </View>
          </RectButton>
          <View style={styles.divider}></View>
        </View>
        
        <View>
          <RectButton
            rippleColor='#ccc'
            style={styles.containerOption} >
            <View style={styles.optionHistoric}>
              <FontAwesome name="cutlery" size={24} color="#7a1533" />
              <Text style={styles.optionTitle}>Cardápio do dia</Text>
              <View style={styles.dataHistoric}>
                <Text>30/10/2020</Text>
                <Text style={styles.labelPrice}>R$ 20,00</Text>
              </View>
              <Feather name="chevron-right" size={24} color="#7a1533" />
            </View>
          </RectButton>
          <View style={styles.divider}></View>
        </View>
        
        <View>
          <RectButton
            rippleColor='#ccc'
            style={styles.containerOption} >
            <View style={styles.optionHistoric}>
              <FontAwesome name="cutlery" size={24} color="#7a1533" />
              <Text style={styles.optionTitle}>Cardápio do dia</Text>
              <View style={styles.dataHistoric}>
                <Text>30/10/2020</Text>
                <Text style={styles.labelPrice}>R$ 20,00</Text>
              </View>
              <Feather name="chevron-right" size={24} color="#7a1533" />
            </View>
          </RectButton>
          <View style={styles.divider}></View>
        </View>
        
      </ScrollView>
    </View>
  );
}

export default Historic;
