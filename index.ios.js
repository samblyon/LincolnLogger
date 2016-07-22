'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
const Splash = require('./src/containers/splash');

class Project extends Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            component: Splash,
            title: "Welcome"
          }}
        />
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('Project', () => Project);
