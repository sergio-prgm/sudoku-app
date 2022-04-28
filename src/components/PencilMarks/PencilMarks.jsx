import { useContext, useEffect } from 'react'
import { AppContext } from '../../pages/SudokuPage/SudokuPage'

function PencilMarks ({ cell }) {
  const { pencil } = useContext(AppContext)

  const pencilMarks = pencil.find(penCell => penCell.col === cell.col && penCell.row === cell.row).marks

  // console.log(Array.from(pencilMarks))

  return (
      <div className='pencilMark'>{Array.from(pencilMarks).map(mark => <span key={mark}>{mark}</span>)}</div>
  )
}

export default PencilMarks
