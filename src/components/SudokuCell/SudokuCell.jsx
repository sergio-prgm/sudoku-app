
export default function SudokuCell ({ cell, setSudoku }) {
  const handleChange = evt => {
    console.log({ cell })
    setSudoku(prevSudoku => {
      prevSudoku.rows[cell.row].cols[cell.col].value = Number(evt.target.value) || ''
      return ({ ...prevSudoku })
    })
  }
  return (
    <input
      type='number'
      className="cell"
      value={cell.value || ''}
      readOnly={Boolean(cell.readOnly)}
      onChange={handleChange}
    />
  )
}
