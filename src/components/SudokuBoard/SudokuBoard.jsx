import { useState } from 'react'
import getSudoku from '../../services/getSudoku'
import SudokuCell from '../SudokuCell/SudokuCell'
import './styles.scss'

export default function SudokuBoard () {
  const newSudoku = getSudoku()
  const [sudoku, setSudoku] = useState(newSudoku)

  console.log(sudoku)
  return (
    <div className="sudoku-board">
      {
        sudoku.rows.map(row => <div className="row" key={row.index} >
          {row.cols.map(cell => {
            return <SudokuCell cell={cell} setSudoku={setSudoku} key={cell.col} />
          }
          )}
          </div>)
      }
    </div>
  )
}
