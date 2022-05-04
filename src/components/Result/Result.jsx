
function Result ({ showResult, isSolved }) {
  return (
    <div>
      {
        !showResult
          ? ''
          : isSolved[0] + isSolved[1]
            ? `Cells to fill: ${isSolved[0]}
                      and wrong cells: ${isSolved[1]}`
            : 'is solved'
      }
    </div>
  )
}

export default Result
