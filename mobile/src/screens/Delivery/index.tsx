import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StatusBar, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
//external libraries
import MapView, { Marker } from 'react-native-maps';
import { FAB, TextInput } from 'react-native-paper';
//my components
import Address from '../../components/Address';

import styles from './styles';
import { Modalize } from 'react-native-modalize';

const regionInitial = {
  "coordinate": {
    "latitude": -3.838983,
    "longitude": -38.641233,
  }
}

const respostaTeste = {
  "address_components": [
    {
      "long_name": "457",
      "short_name": "457",
      "types": [
        "street_number",
      ],
    },
    {
      "long_name": "Rua Central",
      "short_name": "R. Central",
      "types": [
        "route",
      ],
    },
    {
      "long_name": "Jaçanaú",
      "short_name": "Jaçanaú",
      "types": [
        "political",
        "sublocality",
        "sublocality_level_1",
      ],
    },
    {
      "long_name": "Maracanaú",
      "short_name": "Maracanaú",
      "types": [
        "administrative_area_level_2",
        "political",
      ],
    },
    {
      "long_name": "Ceará",
      "short_name": "CE",
      "types": [
        "administrative_area_level_1",
        "political",
      ],
    },
    {
      "long_name": "Brazil",
      "short_name": "BR",
      "types": [
        "country",
        "political",
      ],
    },
    {
      "long_name": "61915-170",
      "short_name": "61915-170",
      "types": [
        "postal_code",
      ],
    },
  ],
  "formatted_address": "R. Central, 457 - Jaçanaú, Maracanaú - CE, 61915-170, Brazil",
  "geometry": {
    "location": {
      "lat": -3.8428897,
      "lng": -38.6429473,
    },
    "location_type": "ROOFTOP",
    "viewport": {
      "northeast": {
        "lat": -3.841540719708498,
        "lng": -38.64159831970849,
      },
      "southwest": {
        "lat": -3.844238680291502,
        "lng": -38.64429628029149,
      },
    },
  },
  "place_id": "ChIJzROuDchSxwcRpteAJJESwp4",
  "plus_code": {
    "compound_code": "5944+RR Maracanaú - State of Ceará, Brazil",
    "global_code": "69835944+RR",
  },
  "types": [
    "street_address",
  ],
}

interface IAddress {
  address_components: IAddressComponents[],
  formatted_address: string,
  geometry: IGeometry,
  place_id: string,
  plus_code: IPlusCode,
  types: string[]
}
interface IAddressComponents {
  long_name: string,
  short_name: string,
  types: string[]
}
interface IPlusCode {
  compound_code: string,
  global_code: string
}
interface IGeometry {
  location: ILocation,
  location_type: string,
  viewport: IViewport,
}
interface ILocation {
  lat: number,
  lng: number
}
interface IViewport {
  northeast: ILocation,
  southwest: ILocation
}

const Delivery = () => {
  const navigation = useNavigation();
  const modalizeRef = useRef<Modalize>();

  const [cep, setCEP] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');

  const [region, setRegion] = useState(regionInitial);
  const [address, setAddress] = useState<IAddress>();
  
  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleSelectAddressOnMap = async (lat: number, long: number) => {
    setRegion({ coordinate: { latitude: lat, longitude: long } });

    const arr = respostaTeste;
    //[TO DO] usar axios
    setAddress(arr);
    
    // await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=MYAPIKEY`)
    //   .then((res) => res.json())
    //   .then((data) => setAddress(data.results[0]));

    //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

  }

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  useEffect(() => {
    address?.address_components.map((component) => {
      if(component.types.includes("street_number")){
        setNumero(component.short_name);
      } else if(component.types.includes("route")){
        setRua(component.short_name);
      } else if(component.types.includes("political") ||
                component.types.includes("sublocality") || 
                component.types.includes("sublocality_level_1")){
        setBairro(component.short_name);
      } else if(component.types.includes("postal_code")){
        setCEP(component.short_name);
      }
    });
  }, [address]);

  const handleConfirmAddress = () => {
    //[TO DO] Salvar em storage ou enviar a api
    navigation.navigate('PersonalData');
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        translucent={true}
        backgroundColor='rgba(0,0,0,0)'
        barStyle={'dark-content'}
      />

      <MapView
        onPress={e => handleSelectAddressOnMap(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)}
        //onRegionChange={ () => setRegion(region)}
        initialRegion={{
          latitude: -3.8416544,//[TO DO] pegar geolocalização do dispositivo
          longitude: -38.635505,//[TO DO] pegar geolocalização do dispositivo
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle} 
      > 
        <Marker
          coordinate={{
            latitude: region.coordinate.latitude,
            longitude: region.coordinate.longitude,
          }}
          title="Local de entrega"
          //description="descrição"
          //onPress={e => console.log(e.nativeEvent)}
          //image={{ uri: 'https://images.vexels.com/media/users/3/141915/isolated/preview/fa18fbc911311b5371870c880fa5f75a-pin-de-localiza----o-by-vexels.png'}}
        />
      </MapView>

      <View style={styles.headerDelivery}>
        <FAB 
          style={styles.fab}
          small
          icon="chevron-left"
          onPress={handleGoBack}
        />
      </View>
      
      <Modalize
        ref={modalizeRef}
        alwaysOpen={350}
        adjustToContentHeight={true}
        handlePosition="outside"
        overlayStyle={{backgroundColor: 'transparent'}}
        // HeaderComponent={
        //   <Text>titulo</Text>
        // }
      >
        <Address
          cep={cep}
          rua={rua}
          numero={numero}
          bairro={bairro}
          complemento={complemento}
        >
          <RectButton
            rippleColor='#ddd'
            style={styles.confirmAddress}
            onPress={handleConfirmAddress}
          >
            <Text 
              style={styles.labelAddressButton}
            >
              Confirmar endereço da entrega
            </Text>
          </RectButton>
        </Address>

      </Modalize>
          
    </View>
  )
};

export default Delivery;
        