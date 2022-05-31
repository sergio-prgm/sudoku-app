import { useCallback, useContext } from 'react'
import loginSvc from '@/services/login'
import addSudokuSvc from '@/services/addSudoku'
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

  const addSudoku = useCallback(({ original }) => {
    // eslint-disable-next-line dot-notation
    const token = JSON.parse(jwt).jwt
    addSudokuSvc({ original, token })
      .then(sudoku => setSavedSudoku(prev => prev.push(sudoku)))
      .catch(error => console.log(error))
  }, [setJWT, setSavedSudoku])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    addSudoku,
    savedSudoku
  }
}
