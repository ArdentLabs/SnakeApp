import React, { Component } from 'react';
import { Text, View } from 'react-native';



class Score extends Component {
  render() {
    return (
      <View
        style={{
          height: this.props.size,
          width: this.props.size * 5,
          borderWidth: 1,
          borderColor: 'darkgray',
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontSize: this.props.size * 0.78,
            textAlign: 'center'
          }}
        >
          {this.props.value}
        </Text>
      </View>
    );
  }
}

export default Score;
