import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 30,
    backgroundColor: '#f1f1f1',
    
  },
  arrowLeft: {
  },
  inputSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,

    borderColor: '#cf2558',
    borderBottomWidth: 0.7,
    borderBottomColor: '#cf2558',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,

    paddingRight: 20
  },
  inputSearchText: {
    height: 40,
    width: 260,
    paddingLeft: 20,
    color: '#7a1533',
    fontWeight: 'bold',
    fontSize: 16
  },
  //title view
  titleView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginLeft: -25
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#3f0a1a'
  },
  textSubtitle: {
    fontWeight: "bold",
    color: 'gray'
  }
});

export default styles;
