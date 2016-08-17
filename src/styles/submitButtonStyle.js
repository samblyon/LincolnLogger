import { StyleSheet, Image } from 'react-native'

export const SubmitButtonStyle = StyleSheet.create({
  submit: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  submitText: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  submitButtonImage: {
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 16,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  loadingIndicator: {
    marginTop: 0
  }
});
