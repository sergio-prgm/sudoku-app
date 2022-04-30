import React, { useState } from 'react'

const Context = React.createContext({})

export function SudokuContextProvider ({ children }) {
  const [sudoku, setSudoku] = useState()
  const [pencil, setPencil] = useState()
  const [selectedCell, setSelectedCell] = useState()

  return (
    <Context.Provider value={{ sudoku, setSudoku, pencil, setPencil, selectedCell, setSelectedCell }}>
      {children}
    </Context.Provider>
  )
}

export default Context
