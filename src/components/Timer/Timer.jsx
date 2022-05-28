import { useEffect, useState } from 'react'
import './Timer.scss'

function Timer () {
  const [time, setTime] = useState(0)

  const renderTime = () => {
    setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
  }

  const formatTime = time => {
    const mins = Math.floor(time / 60)
    const secs = time % 60
    const finalS = secs / 10 >= 1
      ? secs.toString()
      : `0${secs}`
    return `${mins}:${finalS}`
  }

  useEffect(() => {
    renderTime()
  }, [])

  return (
    <div className='timer'>
      {
        formatTime(time)
      }
    </div>
  )
}

export default Timer
