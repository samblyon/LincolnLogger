import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {
  View,
  Text
} from 'react-native'
import Auth from './auth';
import Splash from './splash';
import Home from './home';

export default class App extends Component {
  render(){
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Auth} title="Log-in" />
          <Scene key="signup" component={Auth} title="Signup"/>
          <Scene key="splash" component={Splash} title="Welcome" initial={true}/>
          <Scene key="home" component={Home} title="Home" />
        </Scene>
      </Router>
    );
  }
}
