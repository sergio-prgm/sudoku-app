import { useRef, useEffect, useState } from 'react'

function Timer () {
  const [time, setTime] = useState(55)
  const renders = useRef(0)

  const renderTime = () => {
    setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
  }

  const formatTime = time => {
    let mins = Math.floor(time / 60)
    let secs = time % 60
    let finalS = secs / 10 >= 1 ? secs.toString()
      : `0${secs}`
    return `${mins}:${finalS}`
  }

  useEffect(() => {
    renderTime()
  }, [])
  
  return (
    <div>
      Time: {
        formatTime(time)
      }
    </div>
  )
}

export default Timer