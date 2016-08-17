import { StyleSheet, Image } from 'react-native'

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  cabinImage: {
    paddingTop: 80,
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
    resizeMode: Image.resizeMode.contain,
  },
  explanation: {
    alignSelf: "center",
    backgroundColor: "transparent"
  },
  stats: {
    paddingTop: 300
  },
  logButton: {
    marginTop: -30,
    alignSelf: 'center',
    height: 0,
    backgroundColor: 'white'
  }
});
