import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TextInput, StatusBar } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import ThematicDish from '../../components/ThematicDish';

import styles from './styles';

const req = {
  thematic: [
    {
      "id": 1,
      "isPersonalized": true,
      "name": "Cardapio do dia",
      "dish": [
        {
          "id": 1,
          "image": "https://www.fmetropolitana.com.br/wp-content/uploads/2020/08/FEIJOADA_DIVULGA%C3%87%C3%83O.jpg",
          "title": "Especial 1",
          "detail": "1 unidade"
        },
        {
          "id": 2,
          "image": "https://i0.wp.com/www.spveg.com/blog/wp-content/uploads/2017/06/Mana-Kai-quibe.jpg?fit=700%2C525&ssl=1",
          "title": "Especial 2",
          "detail": "1 unidade"
        },
        {
          "id": 3,
          "image": "https://conteudo.imguol.com.br/c/noticias/e5/2016/07/06/prato-de-comida-refeicao-arroz-feijao-batata-frita-frango-e-salada-comida-tipica-do-brasileiro-prato-feito-pf-1467802726059_615x300.jpg",
          "title": "Especial 3",
          "detail": "1 unidade"
        },
        {
          
          "id": 4,
          "image": "https://conteudo.imguol.com.br/c/entretenimento/55/2019/10/30/prato-com-comida-brasileira-arroz-feijao-bife-e-batata-frita-1572445930497_v2_450x337.jpg",
          "title": "Especial 4",
          "detail": "1 unidade"
        },
      ],
    },
    {
      "id": 2,
      "isPersonalized": false,
      "name": "Noite do salgado",
      "dish": [
        {
          "id": 1,
          "image": "https://imagem.band.com.br/f_135746.jpg",
          "title": "Coxinha",
          "detail": "100 gramas"
        },
        {
          "id": 2,
          "image": "https://i.pinimg.com/564x/ba/16/7e/ba167e1881b538aed2cf3556705bd0b1.jpg",
          "title": "Cachorro-quente",
          "detail": "100 gramas"
        },
        {
          "id": 3,
          "image": "https://img.itdg.com.br/tdg/images/blog/uploads/2018/05/pastel-1.jpg?w=1200",
          "title": "Pastel",
          "detail": "100 gramas"
        },
        {
          "id": 4,
          "image": "https://www.grzero.com.br/wp-content/uploads/2018/06/abobrinha-11.jpg",
          "title": "Torta",
          "detail": "100 gramas"
        }
      ]
    }
  ]
};

interface IThematic {
  thematic: {
      id: number;
      isPersonalized: boolean;
      name: string;
      dish: {
          id: number;
          image: string;
          title: string;
          detail: string;
      }[];
  }[];
}

const Menu = () => {
  const [search, setSearch] = useState('');
  const [Temathics, setThematics] = useState(req);
  //[TO DO] use state para modificar cardapios que aparecem na tela
  
  useEffect(() => {
    if(search) {
      let params;
      Temathics.thematic.map((t) => {
        // params = {...t.dish.filter(o => o.title.match(`/.*${search}.*/`)?.copyWithin)};
        // setThematics(params);
      });
    }
    //[TO DO] Fazer um requisição das tematicas
  }, [search])

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <StatusBar 
          //translucent={true} 
          backgroundColor='#f1f1f1'
          barStyle={'dark-content'}
        />

        <View
          style={styles.inputSearch} >
          <TextInput
            style={styles.inputSearchText}
            placeholder='O que está procurando?'
            value={search}
            onChangeText={text => setSearch(text)}
          ></TextInput>
          <FontAwesome5 
            name="search" 
            size={20} 
            color="gray" />
        </View>
      </View>

      <View style={styles.dishTypesWrapper}>
        <View style={styles.dishType}>
          <View style={styles.dishTypeImage}>
            <FontAwesome5 name="hamburger" size={24} color="#cf2558" />
          </View>
          <Text style={styles.dishTypeDescription}>
            Burger
          </Text>
        </View>
        
        <View style={styles.dishType}>
          <View style={styles.dishTypeImage}>
            <FontAwesome name="cutlery" size={24} color="#cf2558" />
          </View>
          <Text style={styles.dishTypeDescription}>
            food
          </Text>
        </View>
        
        <View style={styles.dishType}>
          <View style={styles.dishTypeImage}>
            <FontAwesome5 name="glass-martini-alt" size={24} color="#cf2558" />
          </View>
          <Text style={styles.dishTypeDescription}>
            Drinks
          </Text>
        </View>
        
        <View style={styles.dishType}>
          <View style={styles.dishTypeImage}>
            <FontAwesome name="heart-o" size={24} color="#cf2558" />
          </View>
          <Text style={styles.dishTypeDescription}>
            Favoritos
          </Text>
        </View>
      </View>
      <ScrollView>
        {
          Temathics.thematic.map((theme) => {
            return (
              <ThematicDish 
                key={theme.id}
                thematicTitle={theme.name}
                listDishes={theme.dish}
                containPersonalized={theme.isPersonalized}
              ></ThematicDish>
            )
          })
        }
      </ScrollView>
      
      
    </View>
  );
}

export default Menu;
