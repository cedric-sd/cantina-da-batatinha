import React, { useState, useRef } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

import { BorderlessButton, RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FAB, Checkbox } from 'react-native-paper';
import { Modalize } from 'react-native-modalize'

//components
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
  const [checked, setChecked] = React.useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalDeliveryMethodOpen, setModalDeliveryMethod] = useState(false);
  const modalizeRef = useRef<Modalize>(null);
  //const modalizeDeliveryMethod = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  }

  // const deliveryMethodOpen = () => {
  //   modalizeDeliveryMethod.current?.open();
  // }

  return(
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
          <View>

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

            
            <Modal 
              transparent={true}
              visible={isModalDeliveryMethodOpen}
              statusBarTranslucent={true}
              onRequestClose={()=>{setModalDeliveryMethod(false)}} >
              <View style={styles.containerModalBackground}>
                {/* <View style={styles.iconCloseWrapper}>
                  <TouchableOpacity>
                    <FontAwesome 
                      onPress={() => {setModalDeliveryMethod(false)}}
                      name="close" 
                      size={30} 
                      color="white" />
                  </TouchableOpacity>
                  
                </View> */}
                <View style={styles.modalDeliveryMethodWrapper}>
                  <View style={styles.modalDeliveryMethod}>

                    <View style={styles.headerDeliveryMethod}>
                      <Text style={styles.headerDeliveryMethodText}>Como deseja receber seu pedido?</Text>
                    </View>
                    
                    <View>
                      <Text>Entrega no endereço</Text>
                      <Text>Entregamos no seu endereço</Text>
                    </View>
                    <View>
                      <Text>Retirada no local</Text>
                      <Text>Você retira no local</Text>
                    </View>
                    
                    <View>
                      <RectButton>
                        <Text>Confirmar entrega</Text>
                      </RectButton>
                    </View>
                  </View>
                </View>
                
              </View>
            </Modal>

            <RectButton 
              rippleColor='#ddd'
              style={styles.buttonMethodDelivery}
              onPress={() => {setModalDeliveryMethod(true)}}>
              <View style={styles.containerMethods}>
                  <Feather name="truck" size={20} color="#aaa" />
                  <Text>Entrega</Text>
                  <Feather name="chevron-down" size={20} color="#cf2558" />
              </View>
            </RectButton>

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
                            <View style={styles.priceSelect}>
                              <Text style={styles.optionValue}>
                                R$ {option.price.toPrecision(3)}
                              </Text>
                              <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                  setChecked(!checked);
                                }}
                              />
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
      
      <RectButton
        rippleColor="#ddd"
        style={styles.fabButton}>
        <FAB 
          style={styles.fab}
          color= '#fff'
          icon="shopping-bag"
          onPress={onOpen}
        />
      </RectButton>

      <Modalize 
        ref={modalizeRef}
        //modalHeight={300}
        //modalTopOffset={100}
        adjustToContentHeight={true}
        handlePosition="inside"
        overlayStyle={styles.overlayModalize}
        modalStyle={styles.modalModalize}
        handleStyle={styles.handleModalize}
        HeaderComponent={
          <View style={styles.headerModalize}>
            <View style={styles.headerModalizeTitle}>
              <Feather name="shopping-bag" size={24} color="#cf2558" />
              <Text style={styles.headerModalizeText}>Meu pedido</Text>
            </View>
            {/* <RectButton
              rippleColor="#ddd"
              style={styles.clearOrderButton}
            >
              <Text style={styles.clearOrderText}>Limpar</Text>
            </RectButton> */}
          </View>
        }
        FloatingComponent={
          <View style={styles.modalFooter}>
            <View style={styles.containerFooter}>
              <Text style={styles.textFooter}>Total</Text>
              <Text style={styles.textFooter}>R$ 25.00</Text>
            </View>

            <RectButton
              rippleColor="#ddd"
              style={styles.confirmOrderButton}
            >
              <Text style={styles.labelConfirmOrderButton}>Confirmar pedido</Text>
            </RectButton>
          </View>
        }
      >
        <View>
          <View style={styles.itemOrder}>
            <View>
              <Text style={styles.orderLabelText}>Tamanho (P)</Text>
              <Text>100 g</Text>
            </View>
            <View>
              <Text style={styles.orderLabelText}>R$ 3.50</Text>
            </View>
          </View>

          <View style={styles.itemOrder}>
            <View>
              <Text style={styles.orderLabelText}>Farofa</Text>
              <Text>100 g</Text>
            </View>
            <View>
              <Text style={styles.orderLabelText}>R$ 3.50</Text>
            </View>
          </View>
          
          <View style={styles.itemOrder}>
            <View>
              <Text style={styles.orderLabelText}>Refrigerante</Text>
              <Text>100 g</Text>
            </View>
            <View>
              <Text style={styles.orderLabelText}>R$ 3.50</Text>
            </View>
          </View>
        </View>
      </Modalize>
      
    </View>
  );
}

export default Dish;
