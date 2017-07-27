import React, { Component } from 'react';
import { View } from 'react-native';



class Block extends Component {
  render() {
    if (this.props.type === 'food')
      return (
        <View
          style={{
            height: this.props.size - 8,
            width: this.props.size - 8,
            margin: 4,
            backgroundColor: 'orange',
          }}
        />
      );
    else if (this.props.type === 'snake')
      return (
        <View
          style={{
            height: this.props.size,
            width: this.props.size,
            backgroundColor: 'blue',
          }}
        />
      );
    else
      return (
        <View
          style={{
            height: this.props.size,
            width: this.props.size,
            backgroundColor: 'whitesmoke',
            borderWidth: 1,
            borderColor: 'white',
          }}
        />
      );
  }
}

export default Block;
