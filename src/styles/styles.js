import { StyleSheet, Image } from 'react-native'

export const AuthStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  instructions: {

  },
  input: {
    height: 50,
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: '#fff',
    margin: 20,
    padding: 10
  },
  splashImage: {
    position: 'absolute',
    top: -300,
    left: 0,
    width: 375,
    resizeMode: Image.resizeMode.contain,
    justifyContent: 'center'
  },
  submit: {
    marginTop: 280,
    alignSelf: 'center',
  },
  submitText: {
    fontSize: 20
  }
});
