import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';



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
      StatusBar.setHidden(true);
      return (
        <View/>
      );
    }
  }
}

export default StatusBarProtector;
