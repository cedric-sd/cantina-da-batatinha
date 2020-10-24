import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //list of thematic dishes
  thematicDishes: {
    marginTop: 25,
    marginLeft: 30
  },
  thematicTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#cf2558'
  },
  listDishes:{
    marginTop: 15
  },
  dish: {
  },
  dishImage:{
    width: 130,
    height: 150,

    marginHorizontal: 25,
    marginLeft: 0,
    borderRadius: 10,
  },
  dishTitle:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3f0a1a',

    marginTop: 5
  },
  dishDetail: {
    color: 'gray'
  },
  separatorDish: {
    borderWidth: 0.8,
    borderColor: '#7a1533',
    marginRight: 30,
    height: 80,
    width: 1
  },
  separatorText: {
    color: '#7a1533',
    marginVertical: 3,
    marginLeft: -7,
    fontStyle: "italic"
  }
});

export default styles;
