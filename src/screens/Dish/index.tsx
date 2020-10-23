import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const Dish = () => {
  return(
    <ScrollView
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.optionsWrapper}>
          
          <View style={styles.iconOptionTitle}>
            <FontAwesome 
              name="cutlery" 
              size={24} 
              color="#cf2558" />
            <Text style={styles.optionTitle}>
              Preços
            </Text>
          </View>

          <View style={styles.option}>
            <View>
              <Text style={styles.optionDescriptionTitle}>
                Tamanho (P)
              </Text>
              <View style={styles.optionDescriptionTag}>
                <Text>100 g</Text>
              </View>
            </View>
            <View>
              <Text style={styles.optionValue}>
                R$ 3,00 #
              </Text>
            </View>
          </View>

          <View style={styles.option}>
            <View>
              <Text style={styles.optionDescriptionTitle}>
                Tamanho (M)
              </Text>
              <View style={styles.optionDescriptionTag}>
                <Text>200 g</Text>
              </View>
            </View>
            <View>
              <Text style={styles.optionValue}>
                R$ 4,00 #
              </Text>
            </View>
          </View>
          
          <View style={styles.option}>
            <View>
              <Text style={styles.optionDescriptionTitle}>
                Tamanho (G)
              </Text>
              <View style={styles.optionDescriptionTag}>
                <Text>300 g</Text>
              </View>
            </View>
            <View>
              <Text style={styles.optionValue}>
                R$ 5,00 #
              </Text>
            </View>
          </View>
        </View>

        {/*transformar em component ou só deixar pra ser renderizado em lista?*/}
        <View style={styles.optionsWrapper}>
          
          <View style={styles.iconOptionTitle}>
            <FontAwesome 
              name="cutlery" 
              size={24} 
              color="#cf2558" />
            <Text style={styles.optionTitle}>
              Temperos
            </Text>
          </View>
 
          <View style={styles.option}>
            <View>
              <Text style={styles.optionDescriptionTitle}>
                Tamanho (P)
              </Text>
              <View style={styles.optionDescriptionTag}>
                <Text>100 g</Text>
              </View>
            </View>
            <View>
              <Text style={styles.optionValue}>
                R$ 3,00 #
              </Text>
            </View>
          </View>

          <View style={styles.option}>
            <View>
              <Text style={styles.optionDescriptionTitle}>
                Tamanho (M)
              </Text>
              <View style={styles.optionDescriptionTag}>
                <Text>200 g</Text>
              </View>
            </View>
            <View>
              <Text style={styles.optionValue}>
                R$ 4,00 #
              </Text>
            </View>
          </View>
          
        </View>

        {/*transformar em component ou só deixar pra ser renderizado em lista?*/}
        <View style={styles.optionsWrapper}>
          
          <View style={styles.iconOptionTitle}>
            <FontAwesome 
              name="cutlery" 
              size={24} 
              color="#cf2558" />
            <Text style={styles.optionTitle}>
              Acompanhamentos
            </Text>
          </View>

          <View style={styles.option}>
            <View>
              <Text style={styles.optionDescriptionTitle}>
                Tamanho (P)
              </Text>
              <View style={styles.optionDescriptionTag}>
                <Text>100 g</Text>
              </View>
            </View>
            <View>
              <Text style={styles.optionValue}>
                R$ 3,00 #
              </Text>
            </View>
          </View>

          <View style={styles.option}>
            <View>
              <Text style={styles.optionDescriptionTitle}>
                Tamanho (M)
              </Text>
              <View style={styles.optionDescriptionTag}>
                <Text>200 g</Text>
              </View>
            </View>
            <View>
              <Text style={styles.optionValue}>
                R$ 4,00 #
              </Text>
            </View>
          </View>
          
        </View>
      </View>
    </ScrollView>
    
  );
}

export default Dish;
