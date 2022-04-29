import { useContext, useEffect, useState } from 'react'
import SudokuContext from '../../context/SudokuContext'

function PencilMarks ({ cell }) {
  const { pencil } = useContext(SudokuContext)
  const [pencilMarks, setPencilMarks] = useState(false)

  // console.log(Array.from(pencilMarks))
  useEffect(() => {
    if (!pencil) return
    setPencilMarks(pencil.find(penCell => penCell.col === cell.col && penCell.row === cell.row).marks)
  }, [pencil])

  return (
      <div className='pencilMark'>
        {
          !pencilMarks
            ? <span > </span>
            : (Array.from(pencilMarks).map(mark => <span key={mark}>{mark}</span>)) }
      </div>
  )
}

export default PencilMarks
