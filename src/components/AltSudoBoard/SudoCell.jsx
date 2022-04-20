import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../pages/SudokuPage/SudokuPage'

export default function SudoCell ({ cell }) {
  const { sudoku, setSudoku } = useContext(AppContext)

  const [isSelected, setIsSelected] = useState(false)
  const [isChanged, setIsChanged] = useState(false)
  // const [isCorrect, setIsCorrect] = useState(true)

  const handleClick = ev => {
    console.log(ev, cell)
    if (!cell.readOnly)setIsSelected(prevSel => !prevSel)
  }

  // console.log(isChanged)

  useEffect(() => {
    setSudoku(prevSudoku => {
      prevSudoku.rows[cell.row].cols[cell.col].isSelected = isSelected
      return { ...prevSudoku }
    })
  }, [isSelected])

  useEffect(() => {
    if (!cell.readOnly && cell.value > 0) {
      setIsChanged(Boolean(cell.value))
      console.log(checkCell(cell, sudoku), cell)
    }
  }, [sudoku])

  return (
    <div
      className={`cell ${isSelected ? 'selected' : ''} ${cell.readOnly ? 'readOnly' : ''}`}
      onClick={handleClick}
    >{cell.value || ''}
    </div>
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
