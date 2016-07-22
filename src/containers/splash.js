'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native'
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
    // flex: 1,
    resizeMode: Image.resizeMode.contain,
    justifyContent: 'center'
  }
});


class Splash extends Component {
  goLogin(){
    console.log("GOING TO LOGIN!");
    this.props.navigator.push({
      title: "Log-in",
      component: Login,
      passProps: { form: 'login' }
    });
  }

  goSignup(){
    console.log("GOING TO SIGNUP!")
    this.props.navigator.push({
      title: "Signup",
      component: Login,
      passProps: { form: 'signup' }
    });
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
          <Text style={styles.login} onPress={this.goLogin.bind(this)}>
            Log In
          </Text>
          <Text style={styles.signup} onPress={this.goSignup.bind(this)}>
            Don't have an account? Sign Up
          </Text>
        </View>
      </View>
    )
  }
}

module.exports = Splash;
