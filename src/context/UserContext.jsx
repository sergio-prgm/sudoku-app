import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [savedSudokus, setSavedSudokus] = useState([])
  const [jwt, setJWT] = useState(
    () => window.sessionStorage.getItem('jwt')
  )

  return (
    <Context.Provider value={{ savedSudokus, setSavedSudokus, jwt, setJWT }}>
      {children}
    </Context.Provider>
  )
}

export default Context
