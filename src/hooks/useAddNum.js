import { useContext, useEffect } from 'react'
import SudokuContext from '../context/SudokuContext'

export default function useAddNum (num, isNormal, isClicked) {
  const { sudoku, setSudoku, pencil, setPencil } = useContext(SudokuContext)

  useEffect(() => {
    if (!isClicked) return
    const selCell = sudoku.rows.find(row => {
      return !!row.cols.find(cell => cell.isSelected)
    }).cols.find(cell => cell.isSelected)
    if (isNormal) {
      setSudoku(prevSudoku => {
        if (selCell) {
          prevSudoku.rows[selCell.row].cols[selCell.col].value = num
          prevSudoku.rows[selCell.row].cols[selCell.col].isChanged = Boolean(num)
          return ({ ...prevSudoku })
        }
      })
    } else {
      const selPencil = pencil.find(cell => selCell.col === cell.col && selCell.row === cell.row)
      if (!num) {
        setPencil(prevPencil => {
          const pencilMarks = prevPencil.filter(obj => obj !== selPencil)
          selPencil.marks.clear()
          return [...pencilMarks, selPencil]
        })
        return
      }
      if (selPencil.marks.has(num)) {
        setPencil(prevPencil => {
          const pencilMarks = prevPencil.filter(obj => obj !== selPencil)
          selPencil.marks.delete(num)
          return [...pencilMarks, selPencil]
        })
      } else {
        setPencil(prevPencil => {
          const pencilMarks = prevPencil.filter(obj => obj !== selPencil)
          selPencil.marks.add(num)
          return [...pencilMarks, selPencil]
        })
      }
    }
  }, [isClicked])
  return { pencil, sudoku }
}
