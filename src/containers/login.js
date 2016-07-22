'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Image,
  ActivityIndicatorIOS
} from 'react-native'
import AuthActions from '../actions/auth'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  instructions: {

  },
  input: {
    height: 50,
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: '#fff',
    margin: 20,
    padding: 10
  },
  splashImage: {
    position: 'absolute',
    top: -300,
    left: 0,
    width: 375,
    resizeMode: Image.resizeMode.contain,
    justifyContent: 'center'
  },
  submit: {
    marginTop: 280,
    alignSelf: 'center',
  },
  submitText: {
    fontSize: 20
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitting: false
    };
  }

  _handleSubmit(){
    this.setState({ submitting: true });
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    if (this.props.form === "login") {
      AuthActions.login(user);
    } else if (this.props.form === "signup") {
      AuthActions.signup(user);
    }
  }

  render(){
    const spinner = this.state.submitting ?
          ( <ActivityIndicatorIOS size='small' />) :
          ( <View />)

    const submitText = this.props.form === "login" ?
          ( "Log-in" ) : ("Signup")

    return(
      <View style={styles.container}>
        <Image source={require('../assets/splash.png')}
          style={styles.splashImage}/>
        <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                placeholder="Username"
              />
        <TextInput
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder="Password"
              />
        <TouchableHighlight style={styles.submit}
          onPress={this._handleSubmit.bind(this)}>
          <Text style={styles.submitText}>
            {submitText}
          </Text>
        </TouchableHighlight>
        {spinner}
      </View>
    )
  }
}

module.exports = Login;
