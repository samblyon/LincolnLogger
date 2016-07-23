'use strict';

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from './src/index';

class LincolnLogger extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('Project', () => LincolnLogger);
