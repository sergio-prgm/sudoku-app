import { useState } from 'react'
import Timer from '../Timer/Timer'
import useSolver from '@/hooks/useSolver'

function Menubar () {
  const [time, setTime] = useState(0)
  const [stopped, setStopped] = useState(false)
  const [clickEvent, setClickedEvent] = useState()
  const { isSolved } = useSolver(clickEvent)

  const handleSave = (e) => {
    setClickedEvent(e)
    console.log(isSolved)
  }

  const handleStop = () => {
    setStopped(prev => !prev)
    console.log(time)
  }

  return (
    <div className='menubar'>
      <Timer time={time} setTime={setTime} stopped={stopped}/>
      <div className='menubar-buttons'>
        <p>
          {!isSolved[0] && !isSolved[1] ? 'It is solved' : 'It isn\'t'}
        </p>
        <button className='btn alt' onClick={handleStop}>Pause</button>
        <button className='btn alt' onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default Menubar
