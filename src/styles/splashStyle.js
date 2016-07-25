import {
  StyleSheet,
  Image
} from 'react-native'

export const SplashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  welcome: {
    flex: 1,
    color: 'black',
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 120,
    paddingBottom: 100
  },
  login: {
    flex: 1,
    alignSelf: 'center',
    color: 'black',
    paddingTop: 290,
    fontSize: 20
  },
  signup: {
    flex: 1,
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
