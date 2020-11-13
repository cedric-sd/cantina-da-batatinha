import React, { useEffect, useRef, useState } from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import LottieView from 'lottie-react-native';

const Checkbox: React.FC = (props) =>  {
  const [isCheckedItemOption, setCheckedItemOption] = React.useState(false);
  
  const check = useRef(null);

  const toggleCheckbox = () => {
    if(isCheckedItemOption){
      setCheckedItemOption(false)
      check.current.reset();
    }else {
      setCheckedItemOption(true)
      check.current.play();
    }
  }

  return (
    <Pressable
      //style={styles.checkboxUnpressed}
      onPress={toggleCheckbox}>

      <LottieView
        ref={check}
        style={styles.animation}
        source={require('../assets/animations/checkbox.json')}
        progress={0.3}
        autoSize
        loop={false}
      />

    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxUnpressed: {
    marginRight: 10,
    padding: -20, 
    borderWidth: 1,
    borderColor: '#7a1533',
    borderRadius: 100
  },
  animation: {
    width: 60, 
    height: 60
  },
});

export default Checkbox;
