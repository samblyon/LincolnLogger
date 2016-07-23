'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import Login from './login'

const styles = StyleSheet.create({
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


class Splash extends Component {
  goSignup(){
    console.log("GOING TO SIGNUP!")
    Actions.auth;

  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image source={require('../assets/splash.png')}
            style={styles.splashImage}
            />
          <Text style={styles.welcome}>
            Welcome to {"\n"}LincolnLogger
          </Text>
          <Text style={styles.login} onPress={() => {
              Actions.login({form: "login"})
            }}>
            Log In
          </Text>
          <Text style={styles.signup} onPress={() => {
              Actions.signup({form: "signup"})
            }}>
            Don't have an account? Sign Up
          </Text>
        </View>
      </View>
    )
  }
}

module.exports = Splash;
