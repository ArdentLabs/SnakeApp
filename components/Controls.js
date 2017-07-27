import React, { Component } from 'react';
import { View } from 'react-native';

import Button from './Button';



class Controls extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: this.props.width,
          justifyContent: 'space-around',
        }}
      >
        <Button
          title='⇦'
          width={this.props.width * 0.2}
          handlePress={this.props.left}
        />
        <Button
          title='⇨'
          width={this.props.width * 0.2}
          handlePress={this.props.right}
        />
        <Button
          title='⇧'
          width={this.props.width * 0.2}
          handlePress={this.props.up}
        />
        <Button
          title='⇩'
          width={this.props.width * 0.2}
          handlePress={this.props.down}
        />
      </View>
    );
  }
}

export default Controls;
