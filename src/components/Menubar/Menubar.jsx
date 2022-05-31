import { useEffect, useState } from 'react'
import Timer from '../Timer/Timer'
import Modal from '@/components/Modal/Modal'
import useSolver from '@/hooks/useSolver'

function Menubar () {
  const [time, setTime] = useState(0)
  const [stopped, setStopped] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { isSolved } = useSolver()
  // const [clickEvent, setClickedEvent] = useState()
  // const { isSolved } = useSolver(clickEvent)

  // const handleSave = (e) => {
  //   setClickedEvent(e)
  //   console.log(isSolved)
  // }
  const solved = isSolved.every(val => val === 0)

  const handlePause = () => {
    setStopped(true)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
    if (!solved) {
      setStopped(false)
    }
  }

  // const finished = () => {
  //   // setStopped(true)
  //   return (
  //     <p>
  //       Congratulations, you solved the sudoku!!
  //     </p>
  //   )
  // }

  useEffect(() => {
    if (solved) {
      setStopped(true)
      setShowModal(true)
    }
  }, [isSolved])

  return (
    <div className='menubar'>
      <Timer time={time} setTime={setTime} stopped={stopped}/>
      {/* <div className='menubar-buttons'> */}
        {/* {
          (!isSolved[0] && !isSolved[1])
            ? finished()
            : ''
        } */}
        <button className='btn alt' onClick={handlePause}>Pause</button>
      {/* </div> */}
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
          <button className='btn main' onClick={handlePause}>Save Sudoku</button>
          <button className='btn main' onClick={handleClose}>Resume</button>
        </Modal>}
    </div>
  )
}

export default Menubar
