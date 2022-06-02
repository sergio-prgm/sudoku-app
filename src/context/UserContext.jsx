import React, { useEffect, useState } from 'react'
import getUserInfo from '@/services/getUserInfo'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [savedSudokus, setSavedSudokus] = useState([])
  const [jwt, setJWT] = useState(
    () => JSON.parse(window.sessionStorage.getItem('jwt'))
  )

  useEffect(() => {
    if (!jwt) return setSavedSudokus([])
    const token = jwt.jwt
    getUserInfo({ token }).then(setSavedSudokus)
  }, [jwt])

  return (
    <Context.Provider value={{ savedSudokus, setSavedSudokus, jwt, setJWT }}>
      {children}
    </Context.Provider>
  )
}

export default Context
