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
  avatarWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#7a1533',
    height: 270,
  },
  imageBackground: {
    width: '90%', 
    height: '90%',
    resizeMode: 'contain',
    alignItems: "center",
    justifyContent: "center",
    position: "absolute"
  },
  avatarImg: {
    backgroundColor: '#ddd',
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonAddImage: {
    backgroundColor: '#ffd463',
    width: 45,
    height: 45,
    padding: 5,
    borderRadius: 50,
    justifyContent:"center",
    alignItems: "center"
  },
  wrapAddImage: {
    alignSelf: "center"
  },
  perfilName: {
    color: '#ffd463',
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 15
  },
  containerPerfil: {
    marginHorizontal: 20,
    marginTop: -20,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    marginBottom: 30
  },
  titleType: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    marginHorizontal: 20
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  groupInput: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginHorizontal: 26
  },
  confirmButtonArea: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ddd',
    borderTopWidth: 1,
    borderTopColor: '#aaa',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10
  },
  confirmButton: {
    backgroundColor: '#cf2558',
    paddingVertical: 20,
    paddingHorizontal: 85,
    margin: 20,
    borderRadius: 40,
    elevation: 7,
    alignItems:"center"
  },
  labelConfirmButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"
  },
});

export default styles;
