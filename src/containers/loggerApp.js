'user strict';

import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import components needed
import * as loggerActions from '../actions/loggerActions';

class LoggerApp extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { state, actions } = this.props;
    return (
      <Text>Hi from the Loggerapp</Text>
    );
  }
}

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(loggerActions, dispatch)
  })
)(LoggerApp);
