import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface ThematicDishesProps {
  thematicTitle: string;
  listDishes: dish[];
  containPersonalized?: boolean;
};

interface dish {
  id: number,
  image: string,
  title: string,
  detail: string
}

const ThematicDish = ({ thematicTitle, listDishes, containPersonalized }: ThematicDishesProps) => {
  const navigation = useNavigation();

  const handleSelectedDish = () => {
    navigation.navigate('Dish');
  }

  return (
    <View style={styles.thematicDishes} >
        <Text style={styles.thematicTitle}>
          {thematicTitle}
        </Text>
        
        {/*[TO DO] procurar uma forma de melhorar essa lista
          • ScrollView se repete */}
        <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.listDishes}>

          {containPersonalized ?
            <ScrollView 
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.listDishes}>

              <TouchableOpacity
                onPress={handleSelectedDish}>
                <View style={styles.dish}>
                  <Image 
                    style={styles.dishImage}
                    source={{ uri: "https://cdn.guiadacozinha.com.br/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-08-at-15.22.35.jpeg" }} 
                  />
                  <Text style={styles.dishTitle}>Personalizado</Text>
                  <Text style={styles.dishDetail}>Montar meu prato</Text>
                </View>
              </TouchableOpacity>
              <View>
                <View style={styles.separatorDish}></View>
                <Text style={styles.separatorText}>ou</Text>
                <View style={styles.separatorDish}></View>
                {/* <Image
                  style={styles.separatorDish}
                  source={require("../../../assets/images/separator.jpg")}
                /> */}
              </View>
              {listDishes.map((dish: dish) => {
                return (
                  <TouchableOpacity 
                    key={dish.id}
                    onPress={handleSelectedDish}>
                    <View style={styles.dish}>
                      <Image 
                        style={styles.dishImage}
                        source={{ uri: dish.image }} 
                      />
                      <Text style={styles.dishTitle}>{dish.title}</Text>
                      <Text style={styles.dishDetail}>{dish.detail}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>   
             :
            //list of dishes
            listDishes.map((dish: dish) => {
              return (
                <TouchableOpacity 
                  key={dish.id}
                  onPress={handleSelectedDish}>
                  <View style={styles.dish}>
                    <Image 
                      style={styles.dishImage}
                      source={{ uri: dish.image }} 
                    />
                    <Text style={styles.dishTitle}>{dish.title}</Text>
                    <Text style={styles.dishDetail}>{dish.detail}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>

      </View>
  );
}

export default ThematicDish;
