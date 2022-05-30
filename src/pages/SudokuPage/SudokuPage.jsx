import './SudokuPage.scss'
import Controls from '@/components/Controls/Controls'
import SudokuBoard from '@/components/SudokuBoard/SudokuBoard'
import Menubar from '@/components/Menubar/Menubar'
import { SudokuContextProvider } from '@/context/SudokuContext'

export default function SudokuPage () {
  return (
    <>
      <SudokuContextProvider>
        <Menubar />
        <div className='game'>
          <SudokuBoard />
          <Controls />
        </div>
      </SudokuContextProvider>
    </>
  )
}
