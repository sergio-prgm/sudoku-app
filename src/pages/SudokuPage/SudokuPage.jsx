import './SudokuPage.scss'
import Controls from '../../components/Controls/Controls'
import SudokuBoard from '../../components/SudokuBoard/SudokuBoard'
import Timer from '../../components/Timer/Timer'

export default function SudokuPage () {
  return (
    <>
      <Timer />
      <SudokuBoard />
      <Controls />
    </>
  )
}
