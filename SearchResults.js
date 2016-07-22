'use strict';

import React, { Component, } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ListView,
  Image,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
})

class SearchResults extends Component {

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
    );
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb}
                   source={{ uri: rowData.img_url }}/>
            <View style={styles.textContainer}>
              <Text>{rowData.title}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render(){
    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}/>
    )
  }
}

module.exports = SearchResults;
