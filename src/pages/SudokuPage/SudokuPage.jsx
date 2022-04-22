import './SudokuPage.scss'
// import SudokuBoard from '../../components/SudokuBoard/SudokuBoard'
import Controls from '../../components/Controls/controls'
import AltSudoBoard from '../../components/AltSudoBoard/AltSudoBoard'
import getSudoku from '../../services/getSudoku'
import { createContext, useState } from 'react'

export const AppContext = createContext()

export default function SudokuPage () {
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
        <AltSudoBoard />
        <Controls />
      </AppContext.Provider>
    </>
  )
}
