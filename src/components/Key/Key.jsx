import { useState } from 'react'
import useAddNum from '../../hooks/useAddNum'

function Key ({ num, className, isNormal }) {
  const [isClicked, setIsClicked] = useState()

  const handleClick = e => {
    setIsClicked(e)
  }

  useAddNum(num, isNormal, isClicked)

  return (
    <button className={className} onClick={handleClick} >
      {num || 'Delete'}
    </button>
  )
}

export default Key
