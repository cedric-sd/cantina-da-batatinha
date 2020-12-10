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
    alignItems:"center",
  },
  labelDataButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"
  },
  addressWrapper: {
    marginHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  containerAddress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 10
  },
  labelSwitch: {
    color: "#cf2558",
    fontSize: 16,
    fontWeight: "bold"
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
});

export default styles;
