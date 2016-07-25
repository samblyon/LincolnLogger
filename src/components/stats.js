import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { statsStyle } from '../styles/statsStyle';

function _loggingDuration(logs) {
  if (logs.length < 1) { return 1; }
  const start = new Date(logs[0].created_at);
  const current = new Date();
  const dayInMs = 1000 * 60 * 60 * 24;
  const duration = Math.floor(
    (current - start) / (dayInMs)
  );
  if (duration < 1) { return 1; }
  return duration;
}

class Stats extends Component {
  render(){
    const styles = statsStyle;
    const logs = this.props.logs;
    const logCount = logs.length;
    const loggingDuration = _loggingDuration(logs);
    const averageLogs = Math.floor(logCount / loggingDuration);

    return (
      <View style={styles.container}>
        <View style={styles.stat}>
          <Text>
            {logCount}
          </Text>
          <Text>
            your logs
          </Text>
        </View>
        <View style={styles.stat}>
          <Text>
            {loggingDuration}
          </Text>
          <Text>
            days logged
          </Text>
        </View>
        <View style={styles.stat}>
          <Text>
            {averageLogs}
          </Text>
          <Text>
            logs / day
          </Text>
        </View>
      </View>
    )
  }
}

export default Stats
