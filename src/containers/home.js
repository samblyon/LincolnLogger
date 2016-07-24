import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeStyle } from '../styles/homeStyle'
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  Image
} from 'react-native'

class Home extends Component {
  render(){
    const styles = HomeStyle;
    const username = this.props.username;
    const logs = this.props.logs;
    return(
      <View style={styles.container}>
        <Text style={styles.explanation}>
          Hi {username}!
          You have logged {this.props.logs.length} logs.
          Fucking retentive, ey?
        </Text>
      </View>
    );
  }
}

export default connect(
  (state) => {
    return {
      username: state.auth.username,
      logs: state.logs
    }
  }
)(Home);
