import hard50000 from '../assets/hard50000.txt'
import easy2500 from '@/assets/easy2500.txt'

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
        isChanged: false,
        isCorrect: true
      }
      row.cols.push(col)
    }
    result.rows.push(row)
  }
  return result
}

export default function getSudoku (num) {
  // let sudokuSet
  return fetch(easy2500)
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
