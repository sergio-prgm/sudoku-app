import React, { useState } from 'react'

const Context = React.createContext({})

export function SudokuContextProvider ({ children }) {
  const [sudoku, setSudoku] = useState()
  const [pencil, setPencil] = useState()

  return (
    <Context.Provider value={{ sudoku, setSudoku, pencil, setPencil }}>
      {children}
    </Context.Provider>
  )
}

export default Context
