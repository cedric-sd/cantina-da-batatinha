import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginHorizontal: 30,
    marginVertical: 5,
    height: 45
  },
  textTitleAddress: {
    fontWeight: "bold",
    fontSize: 18,
    color: '#3f0a1a'
  },
  textAddress: {
    fontWeight: "bold",
    color: '#808080'
  },
  confirmData: {
    backgroundColor: '#cf2558',
    paddingVertical: 20,
    margin: 20,
    borderRadius: 40,
    elevation: 7,
    alignItems:"center",
  },
  labelDataButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"
  },
  addressWrapper: {
    marginHorizontal: 30,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  containerButtonAddress: {
    borderWidth: 2,
    borderColor: "#fc7d4a",
    borderRadius: 10,
    marginVertical: 10,
  },
  addressButton: {
    paddingVertical: 15,
    alignItems:"center",
  },
  labelAddress: {
    color: '#e25923'
  }
});

export default styles;
