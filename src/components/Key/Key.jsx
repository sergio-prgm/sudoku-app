import { useContext } from 'react'
import { AppContext } from '../../pages/SudokuPage/SudokuPage'

function Key ({ num }) {
  const { sudoku, setSudoku } = useContext(AppContext)

  const handleClick = e => {
    console.log(num)
    const selCell = sudoku.rows.find(row => {
      return !!row.cols.find(cell => cell.isSelected)
    }).cols.find(cell => cell.isSelected)
    setSudoku(prevSudoku => {
      prevSudoku.rows[selCell.row].cols[selCell.col].value = num
      return ({ ...prevSudoku })
    })
    console.log(selCell)
  }
  return (
    <button className="key" onClick={handleClick} >
      {num}
    </button>
  )
}

export default Key