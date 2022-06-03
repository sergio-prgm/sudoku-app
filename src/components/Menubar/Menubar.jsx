import { useEffect, useState, useContext } from 'react'
import Timer from '@/components/Timer/Timer'
import Modal from '@/components/Modal/Modal'
import Rules from '../Rules/Rules'

import Context from '@/context/SudokuContext'

import { useLocation } from 'wouter'
import useUser from '@/hooks/useUser'
import useSolver from '@/hooks/useSolver'
import Toggle from '../Toggle/Toggle'

function Menubar () {
  const { sudoku } = useContext(Context)
  const [, setLocation] = useLocation()

  const [time, setTime] = useState(0)
  const [stopped, setStopped] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const { isSolved } = useSolver()
  const { isLogged, addSudoku } = useUser()

  const solved = isSolved.every(val => val === 0)

  const handlePause = () => {
    setStopped(true)
    setShowModal(true)
    console.log(isSolved)
  }

  const handleClose = () => {
    setShowModal(false)
    if (!solved) {
      setStopped(false)
    }
  }

  const handleSave = () => {
    console.log(isLogged)
    if (!isLogged) return console.log('not logged')
    try {
      const original = sudoku[81].original
      addSudoku({ original })
      setLocation('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (solved) {
      setStopped(true)
      setShowModal(true)
    }
  }, [isSolved])

  return (
    <div className='menubar'>
      <Timer time={time} setTime={setTime} stopped={stopped}/>
        <button className='btn alt' onClick={handlePause}>Pause</button>
      { showModal &&
        <Modal onClose={handleClose}>
          { solved
            ? <p>
            Congratulations you solved the sudoku in <Timer time={time} isDark={true}/> minutes.
          </p>
            : <p>
              Sudoku paused at <Timer time={time} isDark={true} /> minutes.
            </p>
          }
          <button className='btn main' onClick={handleSave}>Save Sudoku</button>
          <button className='btn main' onClick={handleClose}>Resume</button>
          <Toggle title='Rules'>
            <article>
              <Rules />
            </article>
          </Toggle>
          <Toggle title='How to play'>
            <article>
              <strong>
                Main operations:
              </strong>
              <p>To draw a number in a cell select it by clicking/tapping on the cell and then click/tap on the desired number.</p>
              <p>The digit mode allows the user to write only one number on the cell, whereas the candidate mode is used to write multiple possibilities (candidates) for that cell.</p>
              <p>Whenever there is an error on a cell all the conflicting cell's change color.</p>
            </article>
            <article>
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
            </article>
          </Toggle>
        </Modal>}
    </div>
  )
}

export default Menubar
