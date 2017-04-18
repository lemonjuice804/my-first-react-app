import React, {Component} from 'react';


function Cell(props) {
  return (
    <button onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class BoardRow extends Component {

  render() {

    return (
      <div className="board-row">
        {this.props.row.map((cell, index) => {
          const keyVal = `cell-key-${cell.rIndex}-${cell.cIndex}`;
          return (
            <Cell key={keyVal} value={cell.value}
              onClick={() => this.props.onClick(cell)} />
          );
        })}
      </div>
    );
  }
}

export default BoardRow;
