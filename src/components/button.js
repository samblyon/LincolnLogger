import React, { Component } from 'react';
import { ButtonStyle } from '../styles/buttonStyle';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicatorIOS
} from 'react-native';


class Button extends Component {
  render(){
    const styles = ButtonStyle;
    const buttonContent = this.props.loading ?
                          (<ActivityIndicatorIOS
                            color='white'
                            size='small'
                            style={styles.loadingIndicator}/>) :
                          (<Text style={styles.buttonText}>
                            {this.props.text}
                          </Text>)
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPressButton}>
          <Image
            source={require('../assets/log.png')}
            style={styles.image}>
            {buttonContent}
          </Image>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Button
