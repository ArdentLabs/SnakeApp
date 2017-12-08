import React, { Component } from 'react';
import { View } from 'react-native';

import Board from './Board';



class GameWindow extends Component {
  render() {
    return (
      <View
        style={{
          height: this.props.height,
          width: this.props.width,
          margin: 5,
        }}
      >
        <Board
          loseGame={this.props.loseGame}
          incrementScore={this.props.incrementScore}
          dimensions={{height: this.props.height, width: this.props.width}}
          direction={this.props.direction}
        />
      </View>
    );
  }
}

export default GameWindow;
