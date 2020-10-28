import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMethods: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  buttonMethodDelivery: {
    width: '35%',
    marginLeft: 30,
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
  optionButton: {
    backgroundColor: '#fff',
    borderRadius: 8,

    marginVertical: 5,
    marginHorizontal: 30,

    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 1,
  },
  option: {
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
  },
  //modal details
  containerModalBackground: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  iconCloseWrapper: {
    alignSelf: 'flex-start',
    justifyContent: "center",
    marginHorizontal: 30,
    height: 150
  },
  modalWrapper: {
    flex: 1,
    marginTop: '20%',
    alignItems: "center"
  },
  modal: {
    alignItems: "center",
    minWidth: '80%',
    //minHeight: '70%',

    maxWidth: '80%',
    maxHeight: '70%',

    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  detailImage: {
    width: 270,
    height: 130,
    marginTop: -40,
    
    borderRadius: 15,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: '#3f0a1a'
  },
  detailPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: '#fc7d4a'
  },
  detailDescription: {
    marginTop: 10,
    marginHorizontal: 30,
    fontWeight: "bold",
    color: '#808080'
  },
  detailButton: {
    backgroundColor: '#cf2558',
    alignItems: "center",

    width: 270,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 20,
    elevation: 7,
  },
  labelDetailButton: {
    color: '#fff',
    fontWeight: 'bold'
  },
  priceSelect: {
    flexDirection: "row",
    alignItems: "center"
  },
  fabButton: {
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: 0,
    borderRadius: 50
  },
  fab: {
    backgroundColor: '#cf2558',
    padding: 5,
    borderRadius: 50
  },
  //modalize section
  overlayModalize: {
    top: -100,
  },
  handleModalize: {
    backgroundColor: '#ccc',
    width: 100
  },
  headerModalize: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerModalizeTitle: {
    flexDirection: "row"
  },
  headerModalizeText: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: '#cf2558'
  },
  modalModalize: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  clearOrderButton: {
    backgroundColor: '#fc7d4a',
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  clearOrderText: {
    color: '#fff'
  },
  //modal footer
  modalFooter: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: "#ccc"
  },
  containerFooter: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 30,
  },
  textFooter: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#3f0a1a'
  },
  //order
  itemOrder: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 23,
  },
  orderLabelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#808080'
  },
  confirmOrderButton: {
    backgroundColor: '#cf2558',
    paddingVertical: 20,
    marginHorizontal: 23,
    borderRadius: 40,
    elevation: 7,
    marginBottom: 20,
    alignItems:"center"
  },
  labelConfirmOrderButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"
  },
  //delivery method modal
  modalDeliveryMethodWrapper: {
    flex: 1,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    
  },
  modalDeliveryMethod: {
    minWidth: '100%',
    //minHeight: '70%',
    
    maxWidth: '100%',
    maxHeight: '70%',
    
    paddingBottom: 20,
    backgroundColor: '#fff'
  },
  headerDeliveryMethod: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerDeliveryMethodText: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#3f0a1a'
  },
  optionDeliveryMethod: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20
  },
  labelOptionDeliveryMethod: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  optionDeliveryMethodWrapIcon: {
    marginLeft: 20
  },
  textDeliveryMethod: {
    color: '#3f0a1a',
    fontSize: 16,
    fontWeight: "bold"
  },
  
  confirmDeliveryMethod: {
    backgroundColor: '#cf2558',
    paddingVertical: 20,
    margin: 20,
    borderRadius: 40,
    elevation: 7,
    alignItems:"center"
  },
  labelDeliveryMethod: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"
  },
});

export default styles;
