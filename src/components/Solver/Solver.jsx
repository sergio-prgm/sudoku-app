import { useContext } from 'react'
import SudokuContext from '@/context/SudokuContext'

function Solver () {
  const { sudoku, pencil } = useContext(SudokuContext)

  const checkChanged = () => {
    return sudoku.rows.map(row => row.cols.filter(cell => !cell.readOnly && !cell.isChanged)).flat()
  }

  const checkIsTrue = () => {
    return pencil.filter(cell => !cell.isCorrect)
  }

  const handleClick = () => {
    console.log(checkChanged())
    console.log(checkIsTrue())
  }

  return (
    <button onClick={handleClick}>Check</button>
  )
}

export default Solver
