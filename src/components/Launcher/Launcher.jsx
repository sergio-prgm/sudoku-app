import { Link } from 'wouter'

const maxNumbers = {
  e: 5,
  m: 2500,
  h: 50000
}

export default function Launcher ({ children }) {
  const childToRoute = children[0].toLowerCase()
  const randomNumber = Math.floor(Math.random() * maxNumbers[childToRoute])
  const route = `sudoku/${childToRoute}/${randomNumber}`

  return (
      <Link to={route} className='btn alt'>{children}</Link>
  )
}
