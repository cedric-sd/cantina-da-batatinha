import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import ThematicDish from '../../components/ThematicDish';

import styles from './styles';

const Menu = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.dishTypesWrapper}>
        <View style={styles.dishType}>
          <View style={styles.dishTypeImage}>
            <FontAwesome5 name="hamburger" size={24} color="#cf2558" />
          </View>
          <Text style={styles.dishTypeDescription}>
            Burger
          </Text>
        </View>
        
        <View style={styles.dishType}>
          <View style={styles.dishTypeImage}>
            <FontAwesome name="cutlery" size={24} color="#cf2558" />
          </View>
          <Text style={styles.dishTypeDescription}>
            food
          </Text>
        </View>
        
        <View style={styles.dishType}>
          <View style={styles.dishTypeImage}>
            <FontAwesome5 name="glass-martini-alt" size={24} color="#cf2558" />
          </View>
          <Text style={styles.dishTypeDescription}>
            Drinks
          </Text>
        </View>
        
        <View style={styles.dishType}>
          <View style={styles.dishTypeImage}>
            <FontAwesome name="heart-o" size={24} color="#cf2558" />
          </View>
          <Text style={styles.dishTypeDescription}>
            Favoritos
          </Text>
        </View>
      </View>

      <ThematicDish></ThematicDish>
      <ThematicDish></ThematicDish>
      
    </View>
  );
}

export default Menu;
