import useSudoku from '../../hooks/useSudoku'
import Cell from '../Cell/Cell'
import Loader from '@/components/Loader/Loader'
import './styles.scss'
import { useRoute } from 'wouter'
import { useEffect } from 'react'

export default function SudokuBoard () {
  const [, params] = useRoute('/sudoku/:dif/:index')
  const { dif: difficulty, index } = params
  const { sudoku, loading, setLoading } = useSudoku(index, difficulty)

  const renderit = () => {
    const newSudoku = []
    for (let i = 0; i < 9; i++) {
      const row = sudoku.slice(i * 9, i * 9 + 9)
      newSudoku.push(row)
    }
    return newSudoku
  }

  useEffect(() => {
    if (!sudoku) return
    setLoading(false)
  }, [sudoku])

  if (loading) {
    return <Loader />
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
