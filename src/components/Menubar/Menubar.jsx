import { useEffect, useState, useContext } from 'react'
import Timer from '@/components/Timer/Timer'
import Modal from '@/components/Modal/Modal'

import Context from '@/context/SudokuContext'

import useUser from '@/hooks/useUser'
import useSolver from '@/hooks/useSolver'

function Menubar () {
  const [time, setTime] = useState(0)
  const [stopped, setStopped] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { isSolved } = useSolver()
  const { isLogged, addSudoku } = useUser()
  const { sudoku } = useContext(Context)

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
    if (!isLogged) return console.log('not logged')
    console.log(sudoku[81].original)
    const original = sudoku[81].original
    addSudoku({ original })
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
        </Modal>}
    </div>
  )
}

export default Menubar
