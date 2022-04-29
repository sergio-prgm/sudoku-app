import sudokuCollection from '../assets/sudokuCollection.txt'

const generateSudoku = (response) => {
  const result = { rows: [] }

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i }
    for (let j = 0; j < 9; j++) {
      const value = Number(response[i * 9 + j])
      const col = {
        row: i,
        col: j,
        value: value,
        readOnly: Boolean(value),
        isSelected: false,
        isChanged: false,
        pencilMark: []
      }
      row.cols.push(col)
    }
    result.rows.push(row)
  }
  return result
}

export default function getSudoku (num) {
  // let sudokuSet
  return fetch(sudokuCollection)
    .then(response => response.text())
    .then(response => response.split('\n')[num])
    .then(response => generateSudoku(response))
    //  sudokuSet = result.split('\n')
}

/*
  sudoku = {
    rows: [
      {cols: [
        {
          row: n,
          col: n,
          value: n,
          readOnly: bool
        }],
        index: n
      }
    ]
  }
*/
