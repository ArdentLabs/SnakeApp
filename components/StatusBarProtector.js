import React, { Component } from 'react';
import { View, Platform } from 'react-native';



class StatusBarProtector extends Component {
  render() {
    if (Platform.OS === 'ios')
      return (
        <View
          style={{
            height: 21,
            width: this.props.width,
            backgroundColor: 'aliceblue',
            borderBottomWidth: 1,
            borderColor: 'darkgray',
          }}
        />
      );
    else
    {
      return (
        <View
          style={{
            height: 24,
            width: this.props.width,
            backgroundColor: 'lightblue',
          }}
        />
      );
    }
  }
}

export default StatusBarProtector;
