import { useEffect, useState, useContext } from 'react'
import Timer from '@/components/Timer/Timer'
import Modal from '@/components/Modal/Modal'
import Rules from '@/components/Rules/Rules'

import Context from '@/context/SudokuContext'

import { useLocation } from 'wouter'
import useUser from '@/hooks/useUser'
import useSolver from '@/hooks/useSolver'
import Toggle from '@/components/Toggle/Toggle'
import Tutorial from '@/components/Tutorial/Tutorial'
import useSudoku from '@/hooks/useSudoku'

function Menubar () {
  const { sudoku, setSudoku } = useContext(Context)
  const [, setLocation] = useLocation()

  const [time, setTime] = useState(0)
  const [stopped, setStopped] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const { isSolved } = useSolver()
  const { isLogged, addSudoku } = useUser()
  const { meta } = useSudoku()

  const solved = isSolved.every(val => val === 0)

  const handlePause = () => {
    setStopped(true)
    if (sudoku[81]) console.log(sudoku[81].time)
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
    if (!isLogged) return console.log('not logged')
    try {
      const sudokuStr = sudoku
        .map(cell => cell.value)
        .join('')
      const ref = meta.ref

      const sudokuToSave = {
        current: sudokuStr,
        ref,
        time,
        isSolved: solved
      }
      console.log(sudokuToSave)
      addSudoku(sudokuToSave)
      // setLocation('/')
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

  useEffect(() => {
    if (meta) setTime(meta.time)
  }, [meta])

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
          {
            solved ||
              <>
                <Toggle title='Rules'>
                <article>
                  <Rules />
                </article>
                </Toggle>
                <Toggle title='How to play'>
                  <article>
                    <Tutorial />
                  </article>
                </Toggle>
              </>
          }
        </Modal>}
    </div>
  )
}

export default Menubar
