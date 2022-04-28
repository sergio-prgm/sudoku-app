import { useContext } from 'react'
import { AppContext } from '../../pages/SudokuPage/SudokuPage'
import Cell from '../Cell/Cell'
import './styles.scss'

export default function AltSudoBoard() {
  const { sudoku } = useContext(AppContext)

  console.log(sudoku)
  return (
    <div className="sudoku-board">
      {
        sudoku.rows.map(row => <div className="row" key={row.index} >
          {row.cols.map(cell => {
            return <Cell cell={cell} key={cell.col} />
          }
          )}
        </div>)
      }
    </div>
  )
}
