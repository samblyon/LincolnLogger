import {
  StyleSheet,
  Image
} from 'react-native'

export const SplashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  logoImage: {
    alignSelf: 'center',
    width: 170,
    height: 120
  },
  welcome: {
    marginTop: 100,
    color: 'black',
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white'
  },
  slogan: {
    width: 280,
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  submitButton: {
    flex: 1,
    marginTop: 30,
    alignSelf: 'center'
  },
  signup: {
    marginTop: 20,
    alignSelf: 'center',
    color: 'black',
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  splashImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: Image.resizeMode.contain,
    justifyContent: 'center'
  }
});
