import { useContext, useEffect, useState } from 'react'
import getSudoku from '../services/getSudoku'
import SudokuContext from '../context/SudokuContext'
import Context from '@/context/UserContext'

export default function useSudoku (num, difficulty = 'm') {
  const { meta, setMeta, sudoku, setSudoku, pencil, setPencil } = useContext(SudokuContext)
  const { jwt } = useContext(Context)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // getSudoku(num, difficulty).then(sudoku => {
    //   console.log(sudoku)
    //   setSudoku(sudoku)
    // })
    const token = jwt?.jwt ?? 'unAuthed'
    getSudoku(num, difficulty, token).then(sudoku => {
      const metaData = sudoku.pop()
      setMeta(metaData)
      setSudoku(sudoku)
    })
  }, [setSudoku])

  useEffect(() => {
    if (sudoku && !pencil) {
      setPencil(
        sudoku
          .filter(cell => !cell.readOnly && !cell.ref)
          .map(({ row, col, isCorrect }) =>
            ({ row, col, marks: new Set([]), isCorrect })
          ))
    }
  }, [sudoku, setPencil])
  return { sudoku, pencil, setPencil, loading, setLoading, meta, setMeta }
}
