import React, { Component } from 'react';
import { View } from 'react-native';

import Board from './Board';



class GameWindow extends Component {
  render() {
    return (
      <View
        style={{
          height: this.props.height + 1,
          width: this.props.width + 1,
          margin: 5,
        }}
      >
        <Board
          loseGame={this.props.loseGame}
          incrementScore={this.props.incrementScore}
          blockSize={this.props.height / 16}
          direction={this.props.direction}
        />
      </View>
    );
  }
}

export default GameWindow;
