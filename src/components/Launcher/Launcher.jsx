import { Link } from 'wouter'

export default function Launcher ({ children }) {
  const randomNumber = Math.floor(Math.random() * 2500)
  const route = `sudoku/${children[0].toLowerCase()}/${randomNumber}`

  return (
      <Link to={route} >{children}</Link>
  )
}
