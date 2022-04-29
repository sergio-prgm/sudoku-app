import { createContext, useState, useEffect } from 'react'
import getSudoku from '../../services/getSudoku'
import './SudokuPage.scss'
import Controls from '../../components/Controls/Controls'
import AltSudoBoard from '../../components/AltSudoBoard/AltSudoBoard'
import Timer from '../../components/Timer/Timer'

export const AppContext = createContext()

export default function SudokuPage() {
  const newSudoku = getSudoku(4)
  const [sudoku, setSudoku] = useState(newSudoku)
  const [pencil, setPencil] = useState(
    sudoku.rows
      .map(row => {
        return row.cols.filter(col => !col.readOnly)
          .map(({ row, col }) => ({ row, col, marks: new Set([]) }))
      }
      ).flat()
  )

  return (
    <>
      <AppContext.Provider value={{ sudoku, setSudoku, pencil, setPencil }}>
        <Timer />
        <AltSudoBoard />
        <Controls />
      </AppContext.Provider>
    </ >
  )
}
