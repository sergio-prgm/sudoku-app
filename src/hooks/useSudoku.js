import { useContext, useEffect } from 'react'
import getSudoku from '../services/getSudoku'
import SudokuContext from '../context/SudokuContext'

export default function useSudoku (num, difficulty = 'm') {
  const { sudoku, setSudoku, pencil, setPencil } = useContext(SudokuContext)

  useEffect(() => {
    getSudoku(num, difficulty).then(sudoku => {
      setSudoku(sudoku)
    })
  }, [setSudoku])

  useEffect(() => {
    if (sudoku && !pencil) {
      setPencil(
        sudoku
          .filter(cell => !cell.readOnly)
          .map(({ row, col, isCorrect }) =>
            ({ row, col, marks: new Set([]), isCorrect })
          ))
    }
  }, [sudoku, setPencil])
  return { sudoku, pencil, setPencil }
}
