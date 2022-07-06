import { useCallback, useContext } from 'react'
import loginSvc from '@/services/login'
import addSudokuSvc from '@/services/addSudoku'
import Context from '@/context/UserContext'

export default function useUser () {
  const { savedSudokus, setSavedSudokus, jwt, setJWT } = useContext(Context)

  const login = useCallback(({ username, password }) => {
    loginSvc({ username, password })
      .then(jwt => {
        window.sessionStorage.setItem('jwt', JSON.stringify(jwt))
        setJWT(jwt)
      })
      .catch(error => {
        window.sessionStorage.removeItem('jwt')
        console.log(error)
      })
  }, [setJWT])

  const logout = useCallback(() => {
    setJWT(null)
    window.sessionStorage.removeItem('jwt')
  }, [setJWT])

  const addSudoku = useCallback((body) => {
    const token = jwt.jwt
    addSudokuSvc({ body, token })
      .then(sudoku => {
        const ok = Boolean(sudoku)
        return ok
      })
      .catch(error => {
        console.log(error)
      })
  }, [setJWT, setSavedSudokus])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    addSudoku,
    savedSudokus
  }
}
