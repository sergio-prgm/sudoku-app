import { useCallback, useContext } from 'react'
import loginSvc from '@/services/login'
import Context from '@/context/UserContext'

export default function useUser () {
  const { savedSudoku, setSavedSudoku, jwt, setJWT } = useContext(Context)

  const login = useCallback(({ username, password }) => {
    loginSvc({ username, password })
      .then(jwt => {
        window.sessionStorage.setItem('jwt', JSON.stringify(jwt))
        console.log(jwt)
        setJWT(jwt)
      })
      .catch(error => {
        window.sessionStorage.removeItem('jwt')
        console.log(error)
      })
  }, [setJWT])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  const addSudoku = useCallback(() => {

  }, [setJWT, setSavedSudoku])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    addSudoku
  }
}
