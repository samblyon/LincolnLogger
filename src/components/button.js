import React, { Component } from 'react';
import { ButtonStyle } from '../styles/buttonStyle';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';


class Button extends Component {
  render(){
    const styles = ButtonStyle;
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPressButton}>
          <Image
            source={require('../assets/logWGreenButton.png')}
            style={styles.image}>
            <Text style={styles.buttonText}>{this.props.text}</Text>
          </Image>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Button
