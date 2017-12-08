import React, { Component } from 'react';
import { Text, View, Dimensions, Button } from 'react-native';

import StatusBarProtector from './components/StatusBarProtector';
import Score from './components/Score';
import GameWindow from './components/GameWindow';
import Controls from './components/Controls';

const {height, width} = Dimensions.get('window');
const scoreHeight = height * 0.047;
const gameHeight  = height * 0.77;
const gameWidth   = width;



class App extends Component {
  constructor() {
    super();
    this.state = {
      direction: 'left',
      score: 0,
      screen: 'start',
    }
  }

  setLeft = () => {
    if (this.state.direction !== 'right')
    {
      this.setState({
        direction: 'left',
      })
    }
  }

  setRight = () => {
    if (this.state.direction !== 'left')
    {
      this.setState({
        direction: 'right',
      })
    }
  }

  setUp = () => {
    if (this.state.direction !== 'down')
    {
      this.setState({
        direction: 'up',
      })
    }
  }

  setDown = () => {
    if (this.state.direction !== 'up')
    {
      this.setState({
        direction: 'down',
      })
    }
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 10,
    });
  }

  startGame = () => {
    this.setState({
      screen: 'running',
      score: 0,
      direction: 'left',
    });
  }

  loseGame = () => {
    this.setState({
      screen: 'lost',
    });
  }

  render() {
    switch (this.state.screen) {
      case 'start':
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: 'lightblue',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 100,
                textAlign: 'center',
              }}
            >
              Snake Game
            </Text>
            <Button
              onPress={this.startGame}
              title='Start!'
            />
          </View>
        );
        break;
      case 'running':
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <StatusBarProtector
              width={width}
            />
            <Score
              size={scoreHeight}
              value={this.state.score}
            />
            <GameWindow
              loseGame={this.loseGame}
              incrementScore={this.incrementScore}
              height={gameHeight}
              width={gameWidth}
              direction={this.state.direction}
            />
            <Controls
              width={width}
              left={this.setLeft}
              right={this.setRight}
              up={this.setUp}
              down={this.setDown}
            />
          </View>
        );
        break;
      case 'lost':
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: 'lightcoral',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 100,
                textAlign: 'center',
              }}
            >
              You Lose!
            </Text>
            <Button
              onPress={this.startGame}
              title='New Game?'
            />
          </View>
        );
        break;
    }
  }
}

export default App;




console.ignoredYellowBox = [
	'Warning: Can only update a mounted or mounting component.' // Because I tried to check if the component is mounted but it still sets state anyway.
];
