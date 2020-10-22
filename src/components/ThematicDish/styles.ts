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
  }
});

export default styles;
