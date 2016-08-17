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
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicatorIOS
} from 'react-native'
import SubmitButton from '../components/submitButton';


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
    const form = this.props.form;
    const styles = AuthStyle;

    const loginErrors = form === "login" ?
          ( <Text style={styles.errorText}>{errors.login}</Text> ) :
          ( <View/> )

    const signupErrors = (form === "signup" && errors.signup) ?
            errors.signup :
            {}

    const usernameErrors = signupErrors.username ?
          ( <Text style={styles.errorText}>
              Username {signupErrors.username}
            </Text>) :
          (<View />)

    const passwordErrors = signupErrors.password ?
          ( <Text style={styles.errorText}>
              Password {signupErrors.password}
            </Text>) :
          (<View />)

    const submitText = this.props.form === "login" ?
          ( "Log-in" ) : ("Signup")

    const submitButton = (
      this.state.username.length > 0 && this.state.password.length > 0
    ) ? (
      <SubmitButton image={require('../assets/button.png')}
        style={styles.submitButton}
        submitText={submitText}
        onPress={this._handleSubmit.bind(this)}
        loading={this.props.loading} />
    ) : (
      <View/>
    )
    return(
      <Image source={require('../assets/welcome.png')}
             style={styles.splashImage}>
        {loginErrors}
        {usernameErrors}
        <Text style={styles.instructions}>
          Enter Logger credentials to continue
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          placeholder="Username"/>
        {passwordErrors}
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="Password"/>
        <View style={styles.submitButton}>
          {submitButton}
        </View>
      </Image>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    loading: state.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      login,
      signup
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
