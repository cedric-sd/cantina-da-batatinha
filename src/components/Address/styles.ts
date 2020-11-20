import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  address: {
    minWidth: '100%',
    //minHeight: '70%',
    
    maxWidth: '100%',
    maxHeight: '80%',
    
    paddingBottom: 20,
    backgroundColor: '#fff'
  },
  confirmAddress: {
    backgroundColor: '#cf2558',
    paddingVertical: 20,
    margin: 20,
    borderRadius: 40,
    elevation: 7,
    alignItems:"center"
  },
  labelAddressButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"
  },
  formAddress: {
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  inlineNumberBairro: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginHorizontal: 40
  },
  input: {
    marginHorizontal: 30,
    marginVertical: 2,
    height: 45
  }
});

export default styles;
