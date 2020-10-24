import React, { useState } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { BorderlessButton, RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

//components
// import OptionDetail from '../../components/OptionDetail';
import styles from './styles';

//[TO DO] Consultar a api quando estiver pronta
const data = {
  "group": [
    {
      "idGroup": 1,
      "title": "Preços",
      "listOptions": [
        {
          "id": 1,
          "titleOption": "Tamanho (P)",
          "listTag": [{ "tagType": "gramas","tag": "100 g" }],
          "price": 3.50,
          "description": "Um prato de tamanho x"
        },
        {
          "id": 2,
          "titleOption": "Tamanho (M)",
          "listTag": [{ "tagType": "gramas","tag": "200 g" }],
          "price": 4.00,
          "description": "Um prato de tamanho y"
        },
        {
          "id": 3,
          "titleOption": "Tamanho (G)",
          "listTag": [{ "tagType": "gramas","tag": "300 g" }],
          "price": 5.00,
          "description": "Um prato de tamanho z"
        }
      ]
    },
    {
      "idGroup": 2,
      "title": "Temperos",
      "listOptions": [
        {
          "id": 1,
          "titleOption": "Pernil Assado",
          "listTag": [{ "tagType": "gramas","tag": "50 g" }],
          "price": 3.00,
          "description": "Um pernil assado"
        },
        {
          "id": 2,
          "titleOption": "Escondidinho de carne",
          "subtitleOption": "Purê de batata",
          "listTag": [{ "tagType": "gramas","tag": "200 g" }],
          "price": 4.00,
          "description": "Um escondidinho normal"
        }
      ]
    },
    {
      "idGroup": 3,
      "title": "Acompanhamentos",
      "listOptions": [
        {
          "id": 1,
          "titleOption": "Arroz",
          "listTag": [{ "tagType": "gramas","tag": "100 g" }],
          "price": 3.00,
          "description": "Um arroz no ponto"
        },
        {
          "id": 2,
          "titleOption": "Farofa",
          "listTag": [{ "tagType": "gramas","tag": "200 g" }],
          "price": 4.00,
          "description": "Uma farofa legal"
        },
        {
          "id": 3,
          "titleOption": "Salada",
          "listTag": [{ "tagType": "gramas", "tag": "300 g" }],
          "price": 5.00,
          "description": "Uma salada verde"
        }
      ]
    }
  ]
}

interface Group {
  idGroup: number,
  title: string,
  listOptions: options[]
}

interface options {
  id: number,
  titleOption: string,
  listTag: listTag[],
  price: number,
  description: string
}

interface listTag {
  tagType: string,
  tag: string,
}

const Dish = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return(
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Modal 
              transparent={true}
              visible={isModalOpen}
              statusBarTranslucent={true}
              onRequestClose={()=>{setModalOpen(false)}} >
              <View style={styles.containerModalBackground}>
                <View style={styles.iconCloseWrapper}>
                  <TouchableOpacity>
                    <FontAwesome 
                      onPress={() => {setModalOpen(false)}}
                      name="close" 
                      size={30} 
                      color="white" />
                  </TouchableOpacity>
                  
                </View>
                <View style={styles.modalWrapper}>
                  <View style={styles.modal}>
                    <Image 
                      style={styles.detailImage}
                      source={{ uri: "https://cdn.wizard.com.br/wp-content/uploads/2020/04/03201951/como-falar-sobre-comidas-em-espanhol.jpg" }} />
                    
                    <Text style={styles.detailTitle} >Meu prato</Text>
                    <Text style={styles.detailPrice}>R$ 4,00</Text>
                    <Text style={styles.detailDescription}>Um prato de tigre para tres trigos tristes, e blabalbalablbabla</Text>

                    <RectButton
                      rippleColor="#ddd"
                      style={styles.detailButton}>
                      <Text style={styles.labelDetailButton}>Adicionar ao pedido</Text>
                    </RectButton>
                      
                  </View>
                </View>
                
              </View>
            </Modal>

            { (data.group.length > 0) ?
              
              data.group.map((item: Group) => {
                return (
                  <View key={item.idGroup}>
                    <View 
                      style={styles.optionsWrapper}>
                      <View style={styles.iconOptionTitle}>
                        <FontAwesome 
                          name="cutlery" 
                          size={24} 
                          color="#cf2558" />
                        <Text style={styles.optionTitle}>
                          {item.title}
                        </Text>
                      </View>
                    </View>

                    { item.listOptions.map(option => {
                      return (
                        <RectButton
                          key={option.id}
                          style={styles.optionButton}
                          rippleColor="#ddd"
                          onPress={()=>{setModalOpen(true)}}>
                          <View
                            style={styles.option}>
                            <View>
                              <Text style={styles.optionDescriptionTitle}>
                                {option.titleOption}
                              </Text>
                              <View style={styles.optionDescriptionTag}>
                                { option.listTag.map(tag => {
                                  return (
                                    <Text key={tag.tagType}>{tag.tag}</Text>
                                  )
                                })}
                              </View>
                            </View>
                            <View>
                              <Text style={styles.optionValue}>
                                R$ {option.price.toPrecision(3)} #
                              </Text>
                            </View>
                          </View>
                        </RectButton>
                      )
                    })}

                  </View>
                )
              })

              :
              <View> </View>
            }
        
        </View>
      </ScrollView>
      {/* <OptionDetail></OptionDetail> */}
    </>
  );
}

export default Dish;
