import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicatorIOS
} from 'react-native'
import { SubmitButtonStyle } from '../styles/submitButtonStyle';

class SubmitButton extends Component {
  render(){
    const styles = SubmitButtonStyle;
    const buttonContent = this.props.loading ?
                          (<ActivityIndicatorIOS
                            color='white'
                            size='small'
                            style={styles.loadingIndicator}/>) :
                          (<Text style={styles.submitText}>
                            {this.props.submitText}
                          </Text>)
    return(
      <TouchableOpacity style={styles.submit}
        onPress={this.props.onPress}>
        <Image style={styles.submitButtonImage}
          source={this.props.image}>
          { buttonContent }
        </Image>
      </TouchableOpacity>
    )
  }
}

export default SubmitButton
