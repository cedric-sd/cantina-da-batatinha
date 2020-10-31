import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#f1f1f1',
  },
  dishTypesWrapper: {
    marginTop: 5,
    marginHorizontal: 30,

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dishType:{

    justifyContent: "center",
    alignItems: "center",
  },
  dishTypeImage: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: '#ccc',
    paddingHorizontal: 19,
    padding: 18,
  },
  dishTypeDescription: {
    marginTop: 5,
    color: '#cf2558',
    fontWeight: "bold",
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
});

export default styles;
