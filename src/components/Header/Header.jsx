import { Link, useRoute } from 'wouter'
import useUser from '@/hooks/useUser'
import './styles.scss'
import logo from '@/assets/icon/Sudoku_Logo.svg'

export default function Header () {
  const { isLogged, logout } = useUser()
  // const [match] = useRoute('/login')
  const storage = isLogged
    ? JSON.parse(window.sessionStorage.getItem('jwt'))
    : null
  const [, params] = useRoute('/:path')

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const renderLogin = ({ isLogged }) => {
    return isLogged
      ? <div className='header--buttons'>
          <Link href='/' onClick={handleClick} className='btn main'>Logout</Link>
          <p className='btn alt'>{storage.username}</p>
        </div>
      : <div className='header--buttons'>
          <Link to='/login' >Login</Link>
          <Link to='/register' >Register</Link>
        </div>
  }

  const toRender = params?.path === 'register' || params?.path === 'login'
    ? null
    : renderLogin({ isLogged })

  return (
    <header className='header'>
      <Link href='/' >
        <img src={logo} className='header--logo' alt="logo img" height='55px' width='55px'/>
      </Link>
      {toRender}
    </header>
  )
}
