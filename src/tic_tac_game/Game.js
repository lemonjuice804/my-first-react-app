import React, { Component } from 'react';

import {cloneDeep} from 'lodash';

import './Game.css';
import Board from './Board';
import {createMatrix, calculateWinner} from './helpers';

function printHelp(squares) {
  const str = squares.map((row, index) => {
    return row.map(cell => cell.value).join('-')
  }).join('\n');
  console.log(str);
}

class Game extends Component {

  constructor() {
    super();
    this.numOfRows = 3;
    this.numOfColumns = 3;
    this.state = {
      history: [{
        squares: createMatrix(this.numOfRows, this.numOfColumns)
      }],
      xIsNext: true,
      stepNumber: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(cell) {
    const {rIndex: row, cIndex: col} = cell;
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = cloneDeep(current.squares);
    const winner = calculateWinner(squares);
    if (winner || squares[row][col].value) {
      return;
    }
    squares[row][col].value = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      stepNumber: history.length,
      history: history.concat([{squares}]),
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  getMoves(history) {
    return history.map((move, step) => {
      const desc = step ?
                   'Move #' + step :
                   'Game start';
      return (
        <li key={step}>
          <a href="#" onClick={() => this.jumpTo(step)}>{desc}</a>
        </li>
      );

    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    console.log('rendering');
    printHelp(current.squares);

    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = `the winner is: ${winner}`;
    } else {
      status = 'next player is:' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <Board
          squares={current.squares}
          numOfRows={this.numOfRows}
          numOfColumns={this.numOfColumns}
          onClick={this.handleButtonClick} />
        <div className="game-info">
          <p>{status}</p>
          <ol>{this.getMoves(history)}</ol>
        </div>
      </div>

    );
  }
}

export default Game;
