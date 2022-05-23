import { useState, useEffect, useContext } from 'react'
import SudokuContext from '../../context/SudokuContext'
import PencilMarks from '../PencilMarks/PencilMarks'

export default function Cell ({ cell }) {
  const { sudoku, pencil, setPencil, selectedCell, setSelectedCell } = useContext(SudokuContext)

  const [isCorrect, setIsCorrect] = useState(true)

  const handleClick = (event) => {
    if (!cell.readOnly) {
      setSelectedCell(prev => {
        if (prev !== cell) return cell
        return undefined
      })
    }
  }

  useEffect(() => {
    setIsCorrect(checkCell(cell, sudoku))
    if (cell === selectedCell) {
      const selPencil = pencil.find(cell => selectedCell.col === cell.col && selectedCell.row === cell.row)
      setPencil(pencil => {
        const pencilMarks = pencil.filter(obj => obj !== selPencil)
        selPencil.isCorrect = checkCell(cell, sudoku)
        return [...pencilMarks, selPencil]
      })
      console.log('checking')
    }
  }, [sudoku])

  return (
    <div
      className={`cell 
        ${cell === selectedCell && 'selected'}
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
  const box = {
    row: Math.floor(cell.row / 3),
    col: Math.floor(cell.col / 3)
  }

  const rowArr = sudoku
    .filter(({ row, col }) => row === cell.row &&
      col !== cell.col)
    .map(cell => cell.value)

  const colArr = sudoku
    .filter(({ row, col }) => col === cell.col &&
      row !== cell.row)
    .map(cell => cell.value)

  const boxArr = sudoku
    .filter(({ row, col }) => (
      Math.floor(row / 3) === box.row &&
      Math.floor(col / 3) === box.col)
    )
    .filter(({ row, col }) => (
      row !== cell.row &&
      col !== cell.col
    ))
    .map(cell => cell.value)

  const rowSet = new Set(rowArr)
  const colSet = new Set(colArr)
  const boxSet = new Set(boxArr)

  if (cell.value !== 0 && (
    rowSet.has(cell.value) ||
    colSet.has(cell.value) ||
    boxSet.has(cell.value) ||
    cell.value > 9 || cell.value < 0)) return false
  else return true
}
