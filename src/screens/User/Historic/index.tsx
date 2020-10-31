import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, Modal } from 'react-native';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

const Historic = () => {
  const [modalVisible, setModalVisible] = useState(false);

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

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <View style={[styles.headerWrapper, { backgroundColor: '#7a1533' }]}>
          <StatusBar 
            //translucent={true} 
            backgroundColor='#f1f1f1'
            barStyle={'dark-content'}
          />
          <BorderlessButton>
            <Feather
              onPress={() => setModalVisible(false)} 
              name="arrow-left" 
              size={24} 
              color="#ffd463" />
          </BorderlessButton>
          <View style={[styles.titleView, {height: 70, backgroundColor: '#7a1533'}]}>
            <View style={styles.avatarImg}>
              <FontAwesome name="user-o" size={20} color="#808080" />
            </View>
          </View>
        </View>
        <ScrollView style={{ flex: 1, height: '100%' }}>
          <View style={styles.titleModalWrapper}>
            <FontAwesome name="cutlery" size={24} color="black" />
            <Text style={styles.titleModal}>Cardápio do dia</Text>
          </View>

          <View style={styles.containerOrder}>
            <View style={styles.optionOrder}>
              <View>
                <Text>Pequeno</Text>
                <Text>20/15</Text>
              </View>
              <View>
                <Text>+ Pernil assado</Text>
                <Text>+ Arroz</Text>
              </View>
            </View>
            <View style={styles.optionOrder}>
              <View>
                <Text>Pequeno</Text>
                <Text>20/15</Text>
              </View>
              <View>
                <Text>+ Pernil assado</Text>
                <Text>+ Arroz</Text>
              </View>
            </View>
            <View style={styles.totalOrder}>
              <Text>Total</Text>
              <Text>R$ 20,00</Text>
            </View>
          </View>

        </ScrollView>
          <View style={styles.buttonFooter}>
            <Feather name="heart" size={24} color="black" />
            <Text>O que achou desse dia?</Text>
          </View>
      </Modal>
      
      <ScrollView>
        <View>
          <RectButton
            rippleColor='#ccc'
            style={styles.containerOption} 
            onPress={() => setModalVisible(true)}>
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
            style={styles.containerOption} 
            onPress={() => setModalVisible(true)}>
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
            style={styles.containerOption} 
            onPress={() => setModalVisible(true)}>
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
            style={styles.containerOption} 
            onPress={() => setModalVisible(true)}>
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
            style={styles.containerOption} 
            onPress={() => setModalVisible(true)}>
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
