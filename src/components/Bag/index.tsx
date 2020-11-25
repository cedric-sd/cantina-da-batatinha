import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from './styles';
//[TO DO] Consultar a api quando estiver pronta

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
  group: number,
  isChecked: boolean,
}

interface listTag {
  tagType: string,
  tag: string,
}
interface IBag {
  children: options[],
  total: number
}

const Bag = ({children, total}: IBag) => {
  const navigation = useNavigation();
  const modalizeRef = useRef<Modalize>(null);

  const [isCheckedOption, setCheckedOption] = useState<options[]>([]);
  const [totalOrder, setTotalOrder] = useState(total);
  
  const handleConfirmOrder = () => {
    navigation.navigate('Delivery');
  }
  
  const onOpen = () => {
    modalizeRef.current?.open();
  }

  const handleRight = () => {
    console.log("botao delete");
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

  useEffect(() => {
    console.log(children);
    console.log(totalOrder);
  }, []);

  return(
    <>
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
            let item = children.find(o => o.id === option.id && option.isChecked === true);
            
            if(item?.price != undefined){
              return(
                <Swipeable
                  onSwipeableRightOpen={() => console.log("swipeRight")}
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
    </>
  )
}

export default Bag;
