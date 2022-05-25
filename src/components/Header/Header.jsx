import { Link } from 'wouter'

export default function Header () {
  return (
    <header>
      <h1>
        <Link to='/'>Home</Link>
      </h1>
      <Link to='/login' >Login</Link>
      <br />
      <Link to='/register' >Register</Link>
    </header>
  )
}
