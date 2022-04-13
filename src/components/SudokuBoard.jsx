import getSudoku from '../services/getSudoku'
import './styles.scss'

export default function SudokuBoard () {
  const sudoku = getSudoku()
  console.log(sudoku)
  return (
    <div className="sudoku-board">
      {
        sudoku.rows.map(row => <div className="row" key={row.index} >
          {row.cols.map(cell => {
            return <input type='number' className="cell" value={cell.value || undefined} readOnly={Boolean(cell.readOnly)} key={cell.col} />
          }
          )}
          </div>)
      }
    </div>
  )
}
