import { useContext, useEffect } from 'react'
import getSudoku from '../services/getSudoku'
import SudokuContext from '../context/SudokuContext'

export default function useSudoku (num) {
  const { sudoku, setSudoku, pencil, setPencil } = useContext(SudokuContext)

  useEffect(() => {
    getSudoku(num).then(sudoku => {
      setSudoku(sudoku)
    })
  }, [setSudoku])

  useEffect(() => {
    if (sudoku && !pencil) {
      setPencil(
        sudoku.rows.map(row => {
          return row.cols.filter(col => !col.readOnly)
            .map(({ row, col }) => ({ row, col, marks: new Set([]), isCorrect: true }))
        }).flat()
      )
    }
  }, [sudoku, setPencil])
  return { sudoku, pencil, setPencil }
}
