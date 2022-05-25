import './SudokuPage.scss'
import Controls from '@/components/Controls/Controls'
import SudokuBoard from '@/components/SudokuBoard/SudokuBoard'
import Timer from '@/components/Timer/Timer'
import { SudokuContextProvider } from '@/context/SudokuContext'

export default function SudokuPage () {
  return (
    <>
      <SudokuContextProvider>
        <Timer />
        <SudokuBoard />
        <Controls />
      </SudokuContextProvider>
    </>
  )
}
