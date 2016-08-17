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
import SubmitButton from '../components/submitButton';

const Splash = () => {
  return (
    <View style={SplashStyle.container}>
      <Image source={require('../assets/welcome.png')}
        style={SplashStyle.splashImage}>
        <Text style={SplashStyle.welcome}>
          Welcome to {"\n"}LincolnLogger
        </Text>
        <Text style={SplashStyle.slogan}>
          The gastrointestinal health tracker app you've been waiting for
        </Text>
        <Image source={require('../assets/log.png')}
               style={SplashStyle.logoImage}/>
        <View style={SplashStyle.submitButton}>
          <SubmitButton image={require('../assets/button.png')}
            submitText="Log-in"
            onPress={() => {
                Actions.login({form: "login"})
              }} />
          <Text style={SplashStyle.signup} onPress={() => {
              Actions.signup({form: "signup"})
            }}>
            Don't have an account? Sign Up
          </Text>
        </View>
      </Image>
    </View>
  )
}

export default Splash
