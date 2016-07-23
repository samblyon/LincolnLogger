import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {
  View,
  Text
} from 'react-native'
import Login from './login';
import Splash from './splash';


export default class App extends Component {
  render(){
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Log-in"/>
          <Scene key="signup" component={Login} title="Signup"/>
          <Scene key="splash" component={Splash} title="Welcome" initial={true}/>
        </Scene>
      </Router>
    );
  }
}
