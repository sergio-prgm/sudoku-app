import { Link } from 'wouter'
import './styles.scss'

const COLLECTION = {
  e: 'easy',
  m: 'medium',
  h: 'hard'
}

export default function SudokuList ({ list }) {
  console.log(list)
  return (
    <div>
      <ul className='sudoku-list'>
        {
          list.map(({ ref, state }) => {
            const [difficulty, num] = ref.split('-')
            const path = `sudoku/${difficulty}/${num}`
            console.log(state.isSolved)
            return <li key={ref} className={state.isSolved && 'solved'}><Link href={path}>{COLLECTION[difficulty]} - {num}</Link></li>
          })
        }
      </ul>
    </div>
  )
}
