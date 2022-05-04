import { useContext, useState, useEffect } from 'react'
import SudokuContext from '@/context/SudokuContext'
import Result from '@/components/Result/Result'

function Solver () {
  const { sudoku, pencil } = useContext(SudokuContext)
  const [isSolved, setIsSolved] = useState(['a', 'a'])
  const [showResult, setShowResult] = useState(false)

  const checkChanged = () => {
    if (!sudoku) return
    return sudoku.rows.map(row => row.cols.filter(cell => !cell.readOnly && !cell.isChanged)).flat()
  }

  const checkIsTrue = () => {
    if (!pencil) return
    return pencil.filter(cell => !cell.isCorrect)
  }

  const handleClick = () => {
    console.log(checkChanged().length)
    console.log(checkIsTrue())
    setShowResult(prev => !prev)
    // !checkChanged().length && !checkIsTrue().length && setIsSolved(true)
  }

  useEffect(() => {
    if (!sudoku || !pencil) return
    setIsSolved([checkChanged().length, checkIsTrue().length])
  }, [sudoku, pencil])

  return (
    <>
      <button onClick={handleClick}>Check</button>
      <Result showResult={showResult} isSolved={isSolved} />
    </>
  )
}

export default Solver
// !checkChanged().length &&
