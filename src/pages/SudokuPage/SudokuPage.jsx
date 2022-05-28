import './SudokuPage.scss'
import Controls from '@/components/Controls/Controls'
import SudokuBoard from '@/components/SudokuBoard/SudokuBoard'
import Timer from '@/components/Timer/Timer'
import { SudokuContextProvider } from '@/context/SudokuContext'
import Solver from '@/components/Solver/Solver'

export default function SudokuPage () {
  return (
    <>
      <SudokuContextProvider>
        <div className='menubar'>
          <Timer />
          <div className='menubar-buttons'>
            <button className='btn alt'>Pause</button>
            <button className='btn alt'>Save</button>
            <Solver />
          </div>
        </div>
        <div className='game'>
          <SudokuBoard />
          <Controls />
        </div>
      </SudokuContextProvider>
    </>
  )
}
