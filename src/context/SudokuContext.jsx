import React, { useState } from 'react'

const Context = React.createContext({})

export function SudokuContextProvider ({ children }) {
  const [sudoku, setSudoku] = useState()
  const [pencil, setPencil] = useState()
  const [selectedCell, setSelectedCell] = useState()
  const [meta, setMeta] = useState()

  return (
    <Context.Provider value={{ meta, setMeta, sudoku, setSudoku, pencil, setPencil, selectedCell, setSelectedCell }}>
      {children}
    </Context.Provider>
  )
}

export default Context
