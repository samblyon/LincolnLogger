import { StyleSheet, Image } from 'react-native'

export const AuthStyle = StyleSheet.create({
  splashImage: {
    paddingTop: 80,
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
    resizeMode: Image.resizeMode.contain,
  },
  instructions: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'white'
  },
  input: {
    height: 50,
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: '#fff',
    margin: 20,
    padding: 10
  },
  errorText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 16,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  submitButton: {
    flex: 1,
    marginTop: 140
  }
});
