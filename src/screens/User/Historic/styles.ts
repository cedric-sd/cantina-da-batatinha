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
  }
});

export default styles;
