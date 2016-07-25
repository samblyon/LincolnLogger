import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { HomeStyle } from '../styles/homeStyle'
import { Actions } from 'react-native-router-flux';
import { logLog } from '../actions/loggerActions';
import Button from '../components/button';
import Stats from '../components/stats';
import {
  View,
  Text,
  Image
} from 'react-native'

class Home extends Component {
  _handleLogPress(){
    console.log("log button pressed!")
    this.props.actions.logLog(this.props.token);
  }

  render(){
    const styles = HomeStyle;
    const username = this.props.username;
    const logs = this.props.logs;
    let cabinStage = Math.floor(this.props.logs.length / 4);
    if (cabinStage > 10) { cabinStage = 10; }
    const cabinImages = [
      require('../assets/welcome.png'),
      require('../assets/cabin1.png'),
      require('../assets/cabin2.png'),
      require('../assets/cabin3.png'),
      require('../assets/cabin4.png'),
      require('../assets/cabin5.png'),
      require('../assets/cabin6.png'),
      require('../assets/cabin7.png'),
      require('../assets/cabin8.png'),
      require('../assets/cabin9.png'),
      require('../assets/cabin10.png')
    ]
    const cabinImage = cabinImages[cabinStage];

    return(
      <View style={styles.container}>
        <Image
        source={cabinImage}
        style={styles.cabinImage} />
        <Text style={styles.explanation}>
          Hi {username}!
          You have logged {this.props.logs.length} logs.
          Good work!
        </Text>
        <View style={styles.stats}>
          <Stats logs={this.props.logs} />
        </View>
        <View style={styles.logButton}>
          <Button
            onPressButton={this._handleLogPress.bind(this)}
            text="Log a log"
            loading={this.props.loading}
            />
        </View>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    token: state.auth.token,
    logs: state.logs,
    loading: state.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      logLog
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
