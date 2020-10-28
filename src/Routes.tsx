import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

//components
import Header from './components/Header';

//screens
import Menu from './screens/Menu';
import Dish from './screens/Dish';
import Delivery from './screens/Delivery';
import PersonalData from './screens/PersonalData';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return(
    <NavigationContainer>
      <Navigator 
        initialRouteName="Menu"
        screenOptions={{ 
          headerShown: true, 
          cardStyle: { backgroundColor: '#f1f1f1' } 
        }}>

        <Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'Menu',
            headerShown: true,
            header: (props) => <Header title="" subtitle="" showSearchInput={true}  {...props} />
          }}
        />

        <Screen
          name="Dish"
          component={Dish}
          options={{
            title: 'Dish',
            headerShown: true,
            header: (props) => <Header title="Monte seu prato!" subtitle="tematico do dia" showSearchInput={false} {...props}/>
          }}
        />
        
        <Screen
          name="Delivery"
          component={Delivery}
          options={{
            title: 'Delivery',
            headerShown: false,
            //header: (props) => <Header title="Onde será entregue?" subtitle="meu endereço" showSearchInput={false} {...props}/>
          }}
        />
        
        <Screen
          name="PersonalData"
          component={PersonalData}
          options={{
            title: 'PersonalData',
            headerShown: true,
            header: (props) => <Header title="Quem receberá?" subtitle="meus dados" showSearchInput={false} {...props}/>
          }}
        />
        
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
    //backgroundColor: '#aaaaaa',
  },
});
  
export default Routes;
