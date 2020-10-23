import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  optionsWrapper: {
    justifyContent: "center",
    marginTop: 25,
    marginHorizontal: 30
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#cf2558',
    marginBottom: 5,
    marginLeft: 15
  },
  iconOptionTitle: {
    flexDirection: "row",
  },
  option: {
    backgroundColor: '#fff',
    borderRadius: 8,

    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 1,

    marginVertical: 5,
    padding: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
  },
  optionDescriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3f0a1a'
  },
  optionDescriptionTag:{
    backgroundColor: '#e6e6e6',
    maxWidth: 60,
    paddingHorizontal: 7,
    paddingVertical: 3,
    marginTop: 3,

    borderRadius: 10
  },
  optionValue: {
    fontWeight: "bold"
  }
});

export default styles;