import { useContext, useEffect, useState } from 'react'
import getSudoku from '../services/getSudoku'
import SudokuContext from '../context/SudokuContext'

export default function useSudoku (num, difficulty = 'm') {
  const { sudoku, setSudoku, pencil, setPencil } = useContext(SudokuContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getSudoku(num, difficulty).then(sudoku => {
      setSudoku(sudoku)
    })
  }, [setSudoku])

  useEffect(() => {
    if (sudoku && !pencil) {
      setPencil(
        sudoku
          .filter(cell => !cell.readOnly && !cell.original)
          .map(({ row, col, isCorrect }) =>
            ({ row, col, marks: new Set([]), isCorrect })
          ))
    }
  }, [sudoku, setPencil])
  return { sudoku, pencil, setPencil, loading, setLoading }
}
