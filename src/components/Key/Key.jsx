import { useContext } from 'react'
import { AppContext } from '../../pages/SudokuPage/SudokuPage'

function Key ({ num, className, isNormal }) {
  const { sudoku, setSudoku, pencil, setPencil } = useContext(AppContext)

  const handleClick = e => {
    const selCell = sudoku.rows.find(row => {
      return !!row.cols.find(cell => cell.isSelected)
    }).cols.find(cell => cell.isSelected)

    if (isNormal) {
      setSudoku(prevSudoku => {
        if (selCell) {
          prevSudoku.rows[selCell.row].cols[selCell.col].value = num
          prevSudoku.rows[selCell.row].cols[selCell.col].isChanged = Boolean(num)
          return ({ ...prevSudoku })
        }
      })
    } else {
      const selPencil = pencil.find(cell => selCell.col === cell.col && selCell.row === cell.row)
      if (!num) {
        setPencil(prevPencil => {
          const pencilMarks = prevPencil.filter(obj => obj !== selPencil)
          selPencil.marks.clear()
          return [...pencilMarks, selPencil]
        })
        return
      }
      if (selPencil.marks.has(num)) {
        setPencil(prevPencil => {
          const pencilMarks = prevPencil.filter(obj => obj !== selPencil)
          selPencil.marks.delete(num)
          return [...pencilMarks, selPencil]
        })
      } else {
        setPencil(prevPencil => {
          const pencilMarks = prevPencil.filter(obj => obj !== selPencil)
          selPencil.marks.add(num)
          return [...pencilMarks, selPencil]
        })
      }
      // setPencil(prevPencil => {
      //   const selPencil = prevPencil.find(cell => cell.row === selCell.row && cell.col === selCell.col)
      //   const pencilMarks = prevPencil.filter(obj => obj !== selPencil)
      //   console.log(selPencil.marks.some(mark => mark === num), num)
      //   if (selPencil.marks.some(mark => mark === num)) {
      //     selPencil.marks.filter(mark => mark !== num)
      //   } else {
      //     selPencil.marks.push(num)
      //   }
      //   // const newPencil = { ...selPencil, marks: selPencil.marks.add(num) }
      //   return [...pencilMarks, selPencil]
      // })
    }
  }
  return (
    <button className={className} onClick={handleClick} >
      {num || 'Del '}
    </button>
  )
}

export default Key
