import { useEffect, useState } from 'react'
import './Timer.scss'

function Timer ({ time, setTime, stopped = true, isDark = false }) {
  const [intervalId, setIntervalId] = useState()

  const renderTime = () => {
    const newInterval = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
    setIntervalId(newInterval)
  }
  // Add clear interval()

  const formatTime = time => {
    const mins = Math.floor(time / 60)
    const secs = time % 60
    const finalS = secs / 10 >= 1
      ? secs.toString()
      : `0${secs}`
    return `${mins}:${finalS}`
  }

  useEffect(() => {
    if (stopped) {
      clearInterval(intervalId)
      setIntervalId(null)
    } else renderTime()
  }, [stopped])

  return (
    <span className={`timer ${isDark && 'dark'}`}>
      {
        formatTime(time)
      }
    </span>
  )
}

export default Timer
