import useSudoku from '../../hooks/useSudoku'
import Cell from '../Cell/Cell'
import './styles.scss'

export default function SudokuBoard () {
  const { sudoku } = useSudoku(330)

  return (
    <div className="sudoku-board">
      {sudoku && sudoku.rows.map(row => <div className="row" key={row.index} >
        {row.cols.map(cell => {
          return <Cell cell={cell} key={cell.col} />
        }
        )}
      </div>)}
    </div>
  )
}
