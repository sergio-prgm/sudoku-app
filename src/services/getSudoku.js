import { sudokus } from '../assets/collection'

export default function getSudoku () {
  const rawSudoku = sudokus[4]
  const result = { rows: [] }

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i }
    for (let j = 0; j < 9; j++) {
      const value = Number(rawSudoku[i * 9 + j])
      const col = {
        row: i,
        col: j,
        value: value,
        readOnly: Boolean(value)
      }
      row.cols.push(col)
    }
    result.rows.push(row)
  }
  return result
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
