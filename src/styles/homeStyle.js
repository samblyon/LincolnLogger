import { StyleSheet, Image } from 'react-native'

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  cabinImage: {
    position: 'absolute',
    top: -300,
    left: 0,
    width: 375,
    resizeMode: Image.resizeMode.contain,
    justifyContent: 'center'
  },
  explanation: {
    alignSelf: "center",
    backgroundColor: "transparent"
  },
  logButton: {
    position: 'absolute',
    bottom: 120,
    left: 100,
    height: 0,
    backgroundColor: 'white'
  }
});
