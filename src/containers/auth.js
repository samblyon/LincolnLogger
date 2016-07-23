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
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AuthStyle } from '../styles/styles';
import {
  login
} from '../actions/authActions'

class Auth extends Component {
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
      debugger;
      this.props.login(user)
    } else if (this.props.form === "signup") {
      this.props.signup(user);
    }
  }

  render(){
    const spinner = this.state.submitting ?
          ( <ActivityIndicatorIOS size='small' />) :
          ( <View />)

    const submitText = this.props.form === "login" ?
          ( "Log-in" ) : ("Signup")

    const styles = AuthStyle;

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
    login: bindActionCreators(login, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
