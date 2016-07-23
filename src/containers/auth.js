'use strict'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AuthStyle } from '../styles/authStyle';
import {
  login,
  signup
} from '../actions/authActions'
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Image,
  ActivityIndicatorIOS
} from 'react-native'


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  _handleSubmit(){
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    if (this.props.form === "login") {
      this.props.actions.login(user)
    } else if (this.props.form === "signup") {
      this.props.actions.signup(user);
    }
  }

  render(){
    const auth = this.props.auth;
    const errors = auth.errors || {};
    const submitting = auth.submitting;

    const loginErrors = this.props.form === "login" ?
          ( <Text>{errors.login}</Text> ) :
          ( <View/> )
    const spinner = auth.submitting ?
          ( <ActivityIndicatorIOS size='small' /> ) :
          ( <View /> )

    const submitText = this.props.form === "login" ?
          ( "Log-in" ) : ("Signup")

    const styles = AuthStyle;

    return(
      <View style={styles.container}>
        <Image source={require('../assets/splash.png')}
          style={styles.splashImage}/>
        {loginErrors}
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
        <Text style={styles.submit}
              onPress={this._handleSubmit.bind(this)}>
          <Text style={styles.submitText}>
            {submitText}
          </Text>
        </Text>
        {spinner}
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({login, signup}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
