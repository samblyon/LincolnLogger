'use strict'

import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';
import { SplashStyle } from '../styles/splashStyle';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native'

const Splash = () => {
  return (
    <View style={SplashStyle.container}>
      <View style={SplashStyle.container}>
        <Image source={require('../assets/splash.png')}
          style={SplashStyle.splashImage}
          />
        <Text style={SplashStyle.welcome}>
          Welcome to {"\n"}LincolnLogger
        </Text>
        <Text style={SplashStyle.login} onPress={() => {
            Actions.login({form: "login"})
          }}>
          Log In
        </Text>
        <Text style={SplashStyle.signup} onPress={() => {
            Actions.signup({form: "signup"})
          }}>
          Don't have an account? Sign Up
        </Text>
      </View>
    </View>
  )
}

export default Splash
