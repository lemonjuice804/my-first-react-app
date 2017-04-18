import React, {Component} from 'react';

import BoardRow from './BoardRow';
import './Board.css';

class Board extends Component {

  render() {
    return (
      <div className="board-container">
        {this.props.squares.map((row, index) => {
          const keyVal = `row-key-${index}`;
          return (
            <BoardRow key={keyVal} id={index} row={row}
              onClick={this.props.onClick} />
          );
        })}
      </div>
    );
  }
}

export default Board;
