import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

//components
import Header from './components/Header';

//screens
import Menu from './screens/Menu';


const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return(
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: true, 
          cardStyle: { backgroundColor: '#f1f1f1' } 
        }}>
        
        <Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: true,
            header: () => <Header />
          }}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f0a1a',
    //backgroundColor: '#7a1533',
    //backgroundColor: '#cf2558',
    //backgroundColor: '#cf423b',
    //backgroundColor: '#fc7d4a',
    //backgroundColor: '#ffd463',
  },
});
  
export default Routes;
