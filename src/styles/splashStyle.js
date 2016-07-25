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
    marginTop: 80,
    alignSelf: 'center',
    width: 170,
    height: 120
  },
  welcome: {
    color: 'black',
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: -20,
    color: 'white'
  },
  slogan: {
    width: 280,
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  submitButton: {
    marginTop: -60,
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
    position: 'absolute',
    top: -300,
    left: 0,
    width: 375,
    resizeMode: Image.resizeMode.contain,
    justifyContent: 'center'
  }
});
