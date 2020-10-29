import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#7a1533',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
  animation: {
    width: 400,
    height: 400
  },
  contentWrapper: {
    marginBottom: '35%',
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#04d361'
  },
  buttonFinish: {
    backgroundColor: '#04d361',
    padding: 20,
    margin: 20,
    borderRadius: 40,
    elevation: 7,
    alignItems:"center",
  },
  labelButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#7a1533'
  }
});

export default styles;
