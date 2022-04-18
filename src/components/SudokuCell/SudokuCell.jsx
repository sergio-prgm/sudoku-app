import { useEffect, useState } from 'react'

export default function SudokuCell ({ cell, setSudoku, sudoku }) {
  const [isChanged, setIsChanged] = useState(false)
  const [isCorrect, setIsCorrect] = useState(true)

  const handleChange = e => {
    // e.preventDefault()
    if (e.target.value > 1 || e.target.value < 9) {
      setSudoku(prevSudoku => {
        prevSudoku.rows[cell.row].cols[cell.col].value = Number(e.target.value) || 0
        return ({ ...prevSudoku })
      })
    }
    if (e.target.value > 9) { setIsCorrect(false) }
    setIsChanged(Boolean(e.target.value))
  }

  // console.log(isChanged)
  /* console.log('This', exactCell) */
  useEffect(() => {
    if (isChanged || cell.value === 0) {
      setIsCorrect(checkCell(cell, sudoku))
    }
  }, [sudoku])

  return (
    <input
      type='number'
      className={`cell ${isCorrect ? '' : 'incorrect'}`}
      value={cell.value || ''}
      readOnly={Boolean(cell.readOnly)}
      onChange={handleChange}
    />
  )
}

function checkCell (cell, sudoku) {
  const box = [Math.floor(cell.row / 3), Math.floor(cell.col / 3)]
  const rowArr = sudoku.rows[cell.row].cols
    .filter(item => item.col !== cell.col)
    .map(obj => obj.value)
  const colArr = sudoku.rows.map(row => row.cols
    .find(col => col.col === cell.col))
    .filter(item => item.row !== cell.row)
    .map(obj => obj.value)
  const boxArr = sudoku.rows
    .filter(row => Math.floor(row.index / 3) === box[0])
    .map(row => {
      return row.cols.filter(col => Math.floor(col.col / 3) === box[1])
    })
    .flat()
    .filter(item => (item.row !== cell.row || item.col !== cell.col))
    .map(cell => cell.value)

  const rowSet = new Set(rowArr)
  const colSet = new Set(colArr)
  const boxSet = new Set(boxArr)
  if (cell.value !== 0 && (rowSet.has(cell.value) ||
    colSet.has(cell.value) ||
    boxSet.has(cell.value) ||
    cell.value > 9 || cell.value < 0)) return false
  else return true
}

// ✅· Array of box (map por el boxArr )
// ✅· Change class (wrong, error ...)
// · if (input === already) => delete
// · if (input !== already) => override
