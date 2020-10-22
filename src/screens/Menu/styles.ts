import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  dishTypesWrapper: {
    marginTop: 25,
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
});

export default styles;
