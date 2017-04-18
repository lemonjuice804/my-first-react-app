
export function createMatrix(numOfRows, numOfColumns) {
  let matrix = Array(numOfRows);
  for(let i = 0; i < numOfRows; i++) {
    matrix[i] = Array(numOfColumns);
    for(let j = 0; j < numOfColumns; j++) {
      matrix[i][j] = {rIndex: i, cIndex: j, value: ''};
    }
  }
  return matrix;
}

export function calculateWinner(squares) {
  const row = squares.length;
  const col = squares[0].length;

  // check per row.
  for (let i = 0; i < row; i++) {
    const val = squares[i][0].value;
    for (let j = 1; j < col; j++) {
      if (val === squares[i][j].value && j === col - 1) {
        return val;
      } else if (val !== squares[i][j].value) {
        break;
      }
    }
  }

  // check per column.
  for (let j = 0; j < col; j++) {
    const val = squares[0][j].value;
    for (let i = 1; i < row; i++) {
      if (val === squares[i][j].value && i === row - 1) {
        return val;
      } else if (val !== squares[i][j].value) {
        break;
      }
    }
  }



  return null;
}
