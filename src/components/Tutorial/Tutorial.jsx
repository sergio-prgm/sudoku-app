
export default function Tutorial () {
  return (
    <>
      <strong>
        Main operations:
      </strong>
      <p>To draw a number in a cell select it by clicking/tapping on the cell and then click/tap on the desired number.</p>
      <p>The digit mode allows the user to write only one number on the cell, whereas the candidate mode is used to write multiple possibilities (candidates) for that cell.</p>
      <p>Whenever there is an error on a cell all the conflicting cell's change color.</p>
      <strong>
        Shortcuts:
      </strong>
      <ul>
        <li>
          <strong>D</strong>: change to digit (normal) mode
        </li>
        <li>
          <strong>C</strong>: change to candidate (small) mode
        </li>
        <li>
          <strong>1-9</strong>: draw the number on the selected cell
        </li>
        <li>
          <strong>Del</strong>: remove digits from selected cell (within the current mode)
        </li>
      </ul>
    </>
  )
}
