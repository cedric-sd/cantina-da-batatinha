import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 30,
    backgroundColor: '#f1f1f1',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
  },
  arrowLeft: {
  },
  inputSearch: {
    borderColor: '#cf2558',
    borderBottomWidth: 0.7,
    borderBottomColor: '#cf2558',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.9,

    height: 40,
    width: 290,
    paddingLeft: 20,
    color: '#7a1533',
    fontWeight: 'bold',
    fontSize: 16
  },
});

export default styles;
