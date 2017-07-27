import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';



class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.handlePress}>
        <Text style={{ fontSize: this.props.width }}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
