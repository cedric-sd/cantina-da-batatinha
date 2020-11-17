import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, Modal, Pressable, TouchableOpacity, FlatList, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Feather } from '@expo/vector-icons';

import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FAB, Checkbox, RadioButton } from 'react-native-paper';
import { Modalize } from 'react-native-modalize'

//components
import styles from './styles';
//import Checkbox from '../../actionComponents/Checkbox';

//[TO DO] Consultar a api quando estiver pronta
const data = {
  "group": [
    {
      "idGroup": 1,
      "title": "Preços",
      "qtdListOptions": 3
    },
    {
      "idGroup": 2,
      "title": "Temperos",
      "qtdListOptions": 2
    },
    {
      "idGroup": 3,
      "title": "Acompanhamentos",
      "qtdListOptions": 3
    }
  ],
  "options": [
    {
      "id": 1,
      "titleOption": "Tamanho (P)",
      "subtitleOption": "",
      "listTag": [{ "tagType": "gramas","tag": "100 g" }],
      "price": 3.50,
      "description": "Um prato de tamanho x",
      "group": 1
    },
    {
      "id": 2,
      "titleOption": "Tamanho (M)",
      "subtitleOption": "",
      "listTag": [{ "tagType": "gramas","tag": "200 g" }],
      "price": 4.00,
      "description": "Um prato de tamanho y",
      "group": 1
    },
    {
      "id": 3,
      "titleOption": "Tamanho (G)",
      "subtitleOption": "",
      "listTag": [{ "tagType": "gramas","tag": "300 g" }],
      "price": 5.00,
      "description": "Um prato de tamanho z",
      "group": 1
    },
    {
      "id": 4,
      "titleOption": "Pernil Assado",
      "subtitleOption": "Purê de batata",
      "listTag": [{ "tagType": "gramas","tag": "50 g" }],
      "price": 3.00,
      "description": "Um pernil assado",
      "group": 2
    },
    {
      "id": 5,
      "titleOption": "Escondidinho de carne",
      "subtitleOption": "Purê de batata",
      "listTag": [{ "tagType": "gramas","tag": "200 g" }],
      "price": 4.00,
      "description": "Um escondidinho normal",
      "group": 2
    },
    {
      "id": 6,
      "titleOption": "Arroz",
      "subtitleOption": "",
      "listTag": [{ "tagType": "gramas","tag": "100 g" }],
      "price": 3.00,
      "description": "Um arroz no ponto",
      "group": 3
    },
    {
      "id": 7,
      "titleOption": "Farofa",
      "subtitleOption": "",
      "listTag": [{ "tagType": "gramas","tag": "200 g" }],
      "price": 4.00,
      "description": "Uma farofa legal",
      "group": 3
    },
    {
      "id": 8,
      "titleOption": "Salada",
      "subtitleOption": "",
      "listTag": [{ "tagType": "gramas", "tag": "300 g" }],
      "price": 5.00,
      "description": "Uma salada verde",
      "group": 3
    }
  ]
}

interface Group {
  idGroup: number,
  title: string,
  qtdListOptions: number
}

interface options {
  id: number,
  titleOption: string,
  subtitleOption: string,
  listTag: listTag[],
  price: number,
  description: string,
  group: number
}

interface listTag {
  tagType: string,
  tag: string,
}
interface stateCheckbox {
  id: number,
  isChecked: boolean,
  name: string
}
const optionsState: stateCheckbox[] = [];

const Dish = () => {
  const navigation = useNavigation();

  useEffect(() => {
    for(var i = 0; i < data.options.length; i++){
      optionsState.push({
        id: data.options[i].id,
        isChecked: false,
        name: "Checkbox" + data.options[i].id.toString()
      });
    };
  }, []);

  const [isCheckedDeliveryMethod, setCheckedDeliveryMethod] = useState('first');
  const [isCheckedOption, setCheckedOption] = useState<stateCheckbox[]>();
  const [totalOrder, setTotalOrder] = useState(0);
  const [addForDetail, setAddForDetail] = useState(0);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalDeliveryMethodOpen, setModalDeliveryMethod] = useState(false);
  const modalizeRef = useRef<Modalize>(null);
  //const modalizeDeliveryMethod = useRef<Modalize>(null);

  const handleConfirmOrder = () => {
    navigation.navigate('Delivery');
  }

  const onOpen = () => {
    modalizeRef.current?.open();
  }

  const onModaDetailOpen = (id: number) => {
    setAddForDetail(id);
    setModalOpen(true);
  }

  useEffect(() => {
    setCheckedOption(optionsState);
  }, []);

  //efeito para adicionar na sacola
  useEffect(() => {
    //preços das opções confirmadas
    let prices: number[] = [];
    //map opçoes confirmadas
    isCheckedOption?.map(option => {
      //array de opções confirmadas
      let item = data.options.find(o => o.id === option.id && option.isChecked === true);

      if(item != undefined ){
        //adicionando preços na lista
        prices.push(item.price);
      }
    });

    //somando preços da lista e setando no useState
    setTotalOrder(prices.reduce((total, numero) => total + numero, 0));

  }, [isCheckedOption]);

  const handleCheckOption = (id: number) => {
    if(isCheckedOption != undefined){
      setCheckedOption(isCheckedOption.map(isCheckedOption => isCheckedOption.id === id ? {...isCheckedOption, isChecked: !isCheckedOption.isChecked} : isCheckedOption));
    }
  }

  const handleRight = () => {
    handleCheckOption(addForDetail);
  }

  const RightActions = (progress: any, dragx: any) => {

    const scale = dragx.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    return (
      <TouchableOpacity
        onPress={handleRight}
      >
        <View style={styles.rightAction}>
          <Animated.View style={[styles.actionView, { transform: [{ scale: scale }] }]}>
            <Feather name="trash-2" size={30} color="#fff" />
          </Animated.View>
        </View>
      </TouchableOpacity>
    )
  }

  const handleDeliveryMethod = (deliveryMethod: string) => {
    if(deliveryMethod === "first"){
      return (
        <View style={styles.containerMethods}>
          <Feather name="truck" size={20} color="#aaa" />
          <Text>Entrega</Text>
          <Feather name="chevron-down" size={20} color="#cf2558" />
        </View>
      )
    } else if (deliveryMethod === "second"){
      return (
        <View style={styles.containerMethods}>
          <Feather name="map-pin" size={20} color="#aaa" />
          <Text>Retirada</Text>
          <Feather name="chevron-down" size={20} color="#cf2558" />
        </View>
      )
    }
    
  }

  return(
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View>

            <Modal 
              transparent={true}
              visible={isModalOpen}
              statusBarTranslucent={true}
              onRequestClose={()=>{setModalOpen(false)}} >
                <View 
                  style={styles.containerModalBackground}
                  //onPress={() => {setModalOpen(false)}}
                  // android_ripple={{ color: '#aaa'}}
                >
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
                    { data.options.length > 0 ?
                        data.options.filter(o => o.id === addForDetail).map((option) => {
                          return (
                            <View 
                              style={styles.modal}
                              key={option.id}>
                              <Image
                                style={styles.detailImage}
                                source={{ uri: "https://cdn.wizard.com.br/wp-content/uploads/2020/04/03201951/como-falar-sobre-comidas-em-espanhol.jpg" }} />
                              
                              <Text style={styles.detailTitle} >{option.titleOption}</Text>
                              <Text style={styles.detailPrice}>R$ {option.price.toPrecision(3)}</Text>
                              <Text style={styles.detailDescription}>{option.description}</Text>
                            
                              <TouchableOpacity
                                //rippleColor="#ddd"
                                style={styles.detailButton}
                                onPress={() => {
                                  handleCheckOption(option.id);
                                  setModalOpen(false);
                                  }}>
                                <Text style={styles.labelDetailButton}>Alterar pedido</Text>
                              </TouchableOpacity>
                            </View>
                          );
                        }) : <View></View>
                    }
                  </View>
                </View>
            </Modal>
            
            <Modal 
              animationType="fade"
              transparent={true}
              visible={isModalDeliveryMethodOpen}
              statusBarTranslucent={true}
              onRequestClose={()=>{setModalDeliveryMethod(false)}} 
            >
              <View style={styles.containerModalBackground}>

                <View style={styles.modalDeliveryMethodWrapper}>
                  <View style={styles.modalDeliveryMethod}>

                    <View style={styles.headerDeliveryMethod}>
                      <Text style={styles.headerDeliveryMethodText}>Como deseja receber seu pedido?</Text>
                    </View>
                    <View>
                      <View style={styles.optionDeliveryMethod}>
                        <View style={styles.labelOptionDeliveryMethod}>
                          <Feather name="truck" size={24} color="black" />
                        
                          <View style={styles.optionDeliveryMethodWrapIcon}>
                            <Text style={styles.textDeliveryMethod}>Entrega no endereço</Text>
                            <Text>Entregamos no seu endereço</Text>
                          </View>

                        </View>
                        <RadioButton
                          value="first"
                          status={ isCheckedDeliveryMethod === 'first' ? 'checked' : 'unchecked' }
                          onPress={() => setCheckedDeliveryMethod('first')}
                        />
                      </View>
                      <View style={styles.optionDeliveryMethod}>
                        <View style={styles.labelOptionDeliveryMethod}>
                          <Feather name="map-pin" size={24} color="black" />

                          <View style={styles.optionDeliveryMethodWrapIcon}>
                            <Text style={styles.textDeliveryMethod}>Retirada no local</Text>
                            <Text>Você retira no local</Text>
                          </View>        

                        </View>
                        <RadioButton
                          value="second"
                          status={ isCheckedDeliveryMethod === 'second' ? 'checked' : 'unchecked' }
                          onPress={() => setCheckedDeliveryMethod('second')}
                        />
                      </View>
                    </View>
                    <RectButton
                      rippleColor='#ddd'
                      style={styles.confirmDeliveryMethod}>
                      <Text 
                        style={styles.labelDeliveryMethod}
                        onPress={()=>{setModalDeliveryMethod(false)}}>
                        Confirmar forma de entrega
                      </Text>
                    </RectButton>
                  </View>
                </View>
                
              </View>
            </Modal>

            <RectButton 
              rippleColor='#ddd'
              style={styles.buttonMethodDelivery}
              onPress={() => {setModalDeliveryMethod(true)}}>
              { handleDeliveryMethod(isCheckedDeliveryMethod) }
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

                    { data.options.map(option => {
                      if(option.group === item.idGroup){
                        return (
                          <View
                            key={option.id}
                            style={styles.option}>

                            <TouchableOpacity
                              style={styles.detailOption}
                              onPress={() => {onModaDetailOpen(option.id)}} >

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
                            </TouchableOpacity>
                            <View style={styles.priceSelect}>
                              <Text style={styles.optionValue}>
                                R$ {option.price.toPrecision(3)}
                              </Text>
                              <Checkbox
                                status={isCheckedOption?.find(o => o.id === option.id)?.isChecked ? 'checked' : 'unchecked'}
                                onPress={() => {handleCheckOption(option.id)}} />
                            </View>
                          </View>
                        )
                      }
                    })}

                  </View>
                )
              })
              :
              <View> </View>
            }
        </View>
        {/* gambiarra para prevenir o botao ficar por cima da opção*/}
        <View style={{marginVertical: 50}}></View>
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
          </View>
        }
        FloatingComponent={
          <View style={styles.modalFooter}>
            <View style={styles.containerFooter}>
              <Text style={styles.textFooter}>Total</Text>
              <Text style={styles.textFooter}>R$ {totalOrder.toPrecision(3)}</Text>
            </View>

            <RectButton
              rippleColor="#ddd"
              style={styles.confirmOrderButton}
              onPress={handleConfirmOrder}
            >
              <Text style={styles.labelConfirmOrderButton}>Confirmar pedido</Text>
            </RectButton>
          </View>
        }
      >
        <View>
          {isCheckedOption?.map(option => {
            let item = data.options.find(o => o.id === option.id && option.isChecked === true);
            
            if(item?.price != undefined){
              return(
                <Swipeable
                  onSwipeableRightOpen={() => setAddForDetail(option.id)}
                  renderRightActions={RightActions}
                  key={item?.id}>
                  <View
                    style={styles.itemOrder}>
                    <View>
                      <Text style={styles.orderLabelText}>{item?.titleOption}</Text>
                      <Text>{item?.subtitleOption}</Text>
                    </View>
                    <View>
                      <Text style={styles.orderLabelText}>R$ {item?.price.toPrecision(3)}</Text>
                    </View>
                  </View>
                </Swipeable>
              );
            }
          })}
        </View>
      </Modalize>
      
    </View>
  );
}

export default Dish;
