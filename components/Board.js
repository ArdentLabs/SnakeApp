import React, { Component } from 'react';
import { View } from 'react-native';

import Block from './Block'
import { clearInterval } from 'timers';
import { setInterval } from 'core-js/library/web/timers';
const blockSize = 23;



class Board extends Component {
  constructor(props) {
    super(props);
    const {height, width} = this.props.dimensions;
    this.snakeInterval = null;
    this.foodInterval  = null;
    const numBlocks = Math.floor(height / blockSize) * Math.floor(width / blockSize);
    let tempArray = Array(numBlocks).fill({ type: 'empty', decay: 0 });
    tempArray[Math.floor(numBlocks / 2)] = { type: 'snake', decay: 3 };
    this.state = {
      globalDecay: 4,
      boardArray: tempArray,
      foods: 0,
      blocksAcross: Math.floor(width / blockSize),
      numBlocks: numBlocks,
      head: Math.floor(numBlocks / 2),
    };
  }

  componentDidMount() {
    this.snakeInterval = setInterval(this.updateSnake, 100);
    this.foodInterval  = setInterval(this.addFood, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.snakeInterval);
    clearInterval(this.foodInterval);
  }

  addFood = () => {
    let placed = false;
    while(!placed)
    {
      let location = Math.floor(Math.random() * this.state.numBlocks);
      let tempArray = this.state.boardArray.slice();
      if (tempArray[location].type === 'empty')
      {
        tempArray[location] = { type: 'food', decay: 0 };
        this.setState({
          boardArray: tempArray,
          foods: this.state.foods + 1,
        });
        placed = true;
      }
    }
  }

  updateSnake = () => {
    switch (this.props.direction) {
      case 'left':
        this.moveLeft();
        break;
      case 'right':
        this.moveRight();
        break;
      case 'up':
        this.moveUp();
        break;
      case 'down':
        this.moveDown();
        break;
    }
    this.decayBoard();
  }

  checkAndMove = (location) => {
    let tempArray = this.state.boardArray.slice();
    switch (this.state.boardArray[location].type) {
      case 'snake':
        this.props.loseGame();
        break;
      case 'food':
        this.props.incrementScore();
        tempArray[location] = { type: 'snake', decay: this.state.globalDecay };
        this.setState({
          globalDecay: this.state.globalDecay + 2,
          boardArray: tempArray,
          head: location,
          foods: this.state.foods - 1,
        });
        break;
      default:
        tempArray[location] = { type: 'snake', decay: this.state.globalDecay };
        this.setState({
          boardArray: tempArray,
          head: location,
        });
    }

  }

  moveLeft = () => {
    if (this.state.head % this.state.blocksAcross === 0)
      this.checkAndMove(this.state.head + this.state.blocksAcross - 1);
    else
      this.checkAndMove(this.state.head - 1);
  }

  moveRight = () => {
    if (this.state.head % this.state.blocksAcross === this.state.blocksAcross - 1)
      this.checkAndMove(this.state.head - this.state.blocksAcross + 1);
    else
      this.checkAndMove(this.state.head + 1);
  }

  moveUp = () => {
    if (this.state.head < this.state.blocksAcross)
      this.checkAndMove(this.state.head + this.state.numBlocks - this.state.blocksAcross);
    else
      this.checkAndMove(this.state.head - this.state.blocksAcross);
  }

  moveDown = () => {
    if (this.state.head >= this.state.numBlocks - this.state.blocksAcross)
      this.checkAndMove(this.state.head - this.state.numBlocks + this.state.blocksAcross);
    else
      this.checkAndMove(this.state.head + this.state.blocksAcross);
  }

  decayBoard = () => {
    let tempArray = this.state.boardArray.slice();
    for (let temp of tempArray)
    {
      if (temp.decay !== 0)
      {
        temp.decay = temp.decay - 1;
        if (temp.decay === 0)
          temp.type = 'empty';
      }
    }
    this.setState({
      boardArray: tempArray,
    })
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.state.boardArray.map((block, index) =>
          <Block key={index} size={blockSize} type={block.type} decay={block.decay}/>
        )}
      </View>
    );
  }
}

export default Board;
