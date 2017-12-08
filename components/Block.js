import React, { Component } from 'react';
import { View } from 'react-native';



class Block extends Component {
  render() {
    if (this.props.type === 'food')
      return (
        <View
          style={{
            height: this.props.size,
            width: this.props.size,
            backgroundColor: 'whitesmoke',
            borderWidth: 1,
            borderColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              height: this.props.size - 8,
              width: this.props.size - 8,
              margin: 4,
              backgroundColor: 'orange',
            }}
          />
        </View>
      );
    else if (this.props.type === 'snake')
      return (
        <View
          style={{
            height: this.props.size,
            width: this.props.size,
            backgroundColor: 'rgb(' + (122 / ((Math.floor(this.props.decay / 3) * 3) / 2)) + ',' + (164 / ((Math.floor(this.props.decay / 3) * 3) / 2)) + ',' + (232 / ((Math.floor(this.props.decay / 3) * 3) / 4)) + ')',
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
