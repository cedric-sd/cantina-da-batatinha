import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  mapStyle: {
    width: '100%',
    height: '75%'
  },
  //title view
  headerDelivery: {
    backgroundColor: 'rgba(0,0,0,0)',
    
    alignItems: 'center',
    flexDirection: "row",
    height: 56,

    position: 'absolute',
    marginLeft: '12%',
    top: 40,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
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
});

export default styles;
