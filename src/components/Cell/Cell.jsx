import { useState, useEffect, useContext } from 'react'
import SudokuContext from '../../context/SudokuContext'
import PencilMarks from '../PencilMarks/PencilMarks'

export default function Cell ({ cell }) {
  const { sudoku, setSudoku } = useContext(SudokuContext)

  const [isSelected, setIsSelected] = useState(false)
  // const [isChanged, setIsChanged] = useState(false)
  const [isCorrect, setIsCorrect] = useState(true)

  const handleClick = ev => {
    // console.log(ev, cell)
    if (!cell.readOnly) setIsSelected(prevSel => !prevSel)
  }

  // console.log(isChanged)
  // useEffect(() => {
  //  if (!cell.readOnly) {
  //    const pencilContent = { row: cell.row, col: cell.col, marks: new Set([]) }
  //    setPencil(prevPencil => ([...prevPencil, pencilContent]))
  //  }
  // }, [])

  useEffect(() => {
    setSudoku(prevSudoku => {
      prevSudoku.rows[cell.row].cols[cell.col].isSelected = isSelected
      return { ...prevSudoku }
    })
  }, [isSelected])

  useEffect(() => {
    if (cell.isChanged || cell.value === 0) {
      setIsCorrect(checkCell(cell, sudoku))
    }
    // console.log(isCorrect, cell.isChanged)
  }, [sudoku])

  // <div >{pencil.map(mark => <span key={mark}>{mark}</span>)}</div>

  return (
    <div
      className={`cell 
        ${isSelected && 'selected'}
        ${cell.readOnly && 'readOnly'}
        ${isCorrect || 'incorrect'}`}
      onClick={handleClick}
    >
      {!cell.value && <PencilMarks cell={cell} />}
      <div
      >{cell.value || ''}
      </div>
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
