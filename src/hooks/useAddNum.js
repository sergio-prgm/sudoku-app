import { useContext, useEffect } from 'react'
import SudokuContext from '../context/SudokuContext'

export default function useAddNum (num, isNormal, isClicked) {
  const { sudoku, setSudoku, pencil, setPencil, selectedCell } = useContext(SudokuContext)

  useEffect(() => {
    if (!isClicked || !selectedCell) return
    console.log('haciendo')
    if (isNormal) {
      setSudoku(prevSudoku => {
        if (selectedCell) {
          prevSudoku.rows[selectedCell.row].cols[selectedCell.col].value = num
          prevSudoku.rows[selectedCell.row].cols[selectedCell.col].isChanged = Boolean(num)
          return ({ ...prevSudoku })
        }
      })
    } else {
      const selPencil = pencil.find(cell => selectedCell.col === cell.col && selectedCell.row === cell.row)
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
