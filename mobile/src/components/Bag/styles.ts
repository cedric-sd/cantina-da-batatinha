import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  //Swipeable bag
  rightAction: {
    backgroundColor: '#ff0000',
    justifyContent: "center",
  },
  actionView: {
    fontSize: 17,
    color: '#fff',
    padding: 20,
  }
});

export default styles;
