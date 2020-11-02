import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#f1f1f1',
  },
  titleView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#3f0a1a'
  },
  containerOption: {
    marginHorizontal: 20,
    paddingVertical: 10
  },
  optionHistoric: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },
  divider: {
    height: 20,
    marginHorizontal: 45,
    borderLeftWidth: 2,
    borderLeftColor: '#cf2558'
  },
  optionTitle: {
    fontWeight: "bold",
    color: '#3f0a1a',
    fontSize: 15,
    marginLeft: -25
  },
  dataHistoric: {
    alignItems: "flex-end",
    marginRight: -25
  },
  labelPrice: {
    fontWeight: 'bold',
    fontSize: 16
  },
  avatarImg: {
    backgroundColor: '#ddd',
    width: 70,
    height: 70,
    marginLeft: -25,
    marginBottom: -100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  titleModalWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 60,
  },
  titleModal: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15
  },
  containerOrder: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cf2558'
  },
  optionOrder: {
    borderBottomWidth: 1,
    borderBottomColor: '#cf2558'
  },
  optionOrderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 5
  },
  totalOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  buttonFooter: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#CF2558'
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
  textTitleAddress: {
    fontWeight: "bold",
    fontSize: 18,
    color: '#3f0a1a'
  },
  textAddress: {
    fontWeight: "bold",
    color: '#808080'
  },
});

export default styles;
