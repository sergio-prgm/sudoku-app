import { useContext } from 'react'
import { AppContext } from '../../pages/SudokuPage/SudokuPage'
import SudoCell from './SudoCell'
import './styles.scss'

export default function AltSudoBoard () {
  const { sudoku } = useContext(AppContext)

  console.log(sudoku)
  return (
    <div className="sudoku-board">
      {
        sudoku.rows.map(row => <div className="row" key={row.index} >
          {row.cols.map(cell => {
            return <SudoCell cell={cell} key={cell.col} />
          }
          )}
          </div>)
      }
    </div>
  )
}
