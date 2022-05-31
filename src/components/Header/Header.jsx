import { Link, useRoute } from 'wouter'
import useUser from '@/hooks/useUser'

export default function Header () {
  const { isLogged, logout } = useUser()
  // const [match] = useRoute('/login')
  const { username } = JSON.parse(window.sessionStorage.getItem('jwt'))
  const [, params] = useRoute('/:path')
  console.log(params)

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const renderLogin = ({ isLogged }) => {
    return isLogged
      ? <><Link href='/' onClick={handleClick}>
          Logout
        </Link>
        <p>{username}</p>
        </>
      : <><Link to='/login' >Login</Link>
            <Link to='/register' >Register</Link>
          </>
  }

  const toRender = params?.path === 'register' || params?.path === 'login'
    ? null
    : renderLogin({ isLogged })

  return (
    <header>
      <h1>
        <Link to='/'>Home</Link>
      </h1>
      {toRender}
    </header>
  )
}
