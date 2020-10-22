import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import styles from './styles';

const ThematicDish = () => {
  return (
    <View style={styles.thematicDishes} >
        <Text style={styles.thematicTitle}>
          Noite do salgado
        </Text>
        
        <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.listDishes}>
          <View style={styles.dish}>
            <Image 
              style={styles.dishImage}
              source={require('../../../assets/images/coxinhas.jpg')} 
            />
            <Text style={styles.dishTitle}>Coxinha</Text>
            <Text style={styles.dishDetail}>100 gramas</Text>
          </View>

          <View style={styles.dish}>
            <Image 
              style={styles.dishImage}
              source={require('../../../assets/images/cachorro-quente.jpg')} 
            />
            <Text style={styles.dishTitle}>Cachorro-quente</Text>
            <Text style={styles.dishDetail}>100 gramas</Text>
            <Text style={styles.dishDetail}>1 unidade</Text>
          </View>

          <View style={styles.dish}>
            <Image 
              style={styles.dishImage}
              source={require('../../../assets/images/pastel.jpg')} 
            />
            <Text style={styles.dishTitle}>Pastel</Text>
            <Text style={styles.dishDetail}>100 gramas</Text>
          </View>
          
          <View style={styles.dish}>
            <Image 
              style={styles.dishImage}
              source={require('../../../assets/images/torta.jpg')} 
            />
            <Text style={styles.dishTitle}>Torta</Text>
            <Text style={styles.dishDetail}>100 gramas</Text>
          </View>
        </ScrollView>
      </View>
  );
}

export default ThematicDish;
