import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Dish = () => {
  return(
    <View style={styles.container}>
      <Text>Dish</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    
export default Dish;
