import React, { Component } from 'react-native';
import {
  NavigatorIOS,
} from 'react-native';
import { Provider } from 'react-redux';
import createStore from './createStore';

const store = createStore();


const Splash = require('./containers/splash');

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Splash,
          title: "Welcome"
        }}
        />
      </Provider>
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
