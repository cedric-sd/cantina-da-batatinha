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
  //modal
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
  }
});

export default styles;