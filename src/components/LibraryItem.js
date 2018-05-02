import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LibraryList extends Component {

  render() {
    return (
      <View>
        <Text>{this.props.library.title}</Text>
      </View>
    );
  }
}

export default LibraryList;
