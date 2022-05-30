import { useContext, useState, useEffect } from 'react'
import SudokuContext from '@/context/SudokuContext'

function useSolver (e) {
  const { sudoku, pencil } = useContext(SudokuContext)
  const [isSolved, setIsSolved] = useState(['a', 'a'])

  const checkChanged = () => {
    if (!sudoku) return
    return sudoku.filter(cell => !cell.readOnly && !cell.isChanged)
  }

  const checkIsTrue = () => {
    if (!pencil) return
    return pencil.filter(cell => !cell.isCorrect)
  }

  useEffect(() => {
    if (!sudoku || !pencil) return
    setIsSolved([checkChanged().length, checkIsTrue().length])
  }, [sudoku, pencil, e])

  return {
    isSolved
  }
}

export default useSolver
