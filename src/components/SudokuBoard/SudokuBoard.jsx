import useSudoku from '../../hooks/useSudoku'
import Cell from '../Cell/Cell'
import './styles.scss'
import { useRoute } from 'wouter'

export default function SudokuBoard () {
  const [, params] = useRoute('/sudoku/:dif/:index')
  const { dif: difficulty, index } = params
  const { sudoku } = useSudoku(index, difficulty)

  const renderit = () => {
    const newSudoku = []
    for (let i = 0; i < 9; i++) {
      const row = sudoku.slice(i * 9, i * 9 + 9)
      newSudoku.push(row)
    }
    return newSudoku
  }

  return (
    <div className="sudoku-board">
      {sudoku && renderit().map((row, index) => <div className="row" key={index} >
        {row.map(cell => {
          return <Cell cell={cell} key={cell.index} />
        }
        )}
      </div>)}
    </div>
  )
}
