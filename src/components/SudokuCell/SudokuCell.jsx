import { useEffect, useState } from 'react'

export default function SudokuCell ({ cell, setSudoku, sudoku }) {
  const [isChanged, setIsChanged] = useState(false)

  const handleChange = evt => {
    setSudoku(prevSudoku => {
      prevSudoku.rows[cell.row].cols[cell.col].value = Number(evt.target.value) || 0
      return ({ ...prevSudoku })
    })
    setIsChanged(true)
  }

  console.log(isChanged)
  /* console.log('This', exactCell) */

  useEffect(() => {
    checkCell(cell, sudoku)
  }, [sudoku])

  return (
    <input
      type='number'
      className="cell"
      value={cell.value || ''}
      readOnly={Boolean(cell.readOnly)}
      onChange={handleChange}
    />
  )
}

function checkCell (cell, sudoku) {
  const rowArr = sudoku.rows[cell.row].cols.map(obj => obj.value)
  const colArr = sudoku.rows.map(row => row.cols.find(col => col.col === cell.col)).map(obj => obj.value)
  const newSudoku = sudoku.rows.map(row => row.cols.map(obj => obj.value))

  //  Check row
  const rowSet = new Set(rowArr)
  // console.log(rowSet)
  // console.log(sudoku.rows[cell.row].cols.map(obj => obj.value))
  //  Check col

  //  Check box

  // console.log(rowArr)
  // console.log(colArr)
  // console.log(newSudoku)
}
