import { useState, useEffect, useCallback } from 'react'
import useAddNum from '../../hooks/useAddNum'
import Key from '../Key/Key'
import Solver from '../Solver/Solver'
import './styles.scss'

export default function Controls () {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [isNormal, setIsNormal] = useState(true)
  const [keyEvent, setKeyEvent] = useState()

  const handleKeyboard = useCallback(event => {
    const eKey = event.key
    if (keys.some(key => key == eKey)) setKeyEvent(event)
    if (event.key === 'Backspace') setKeyEvent(event)
  })

  useAddNum(Number(keyEvent?.key) || 0, isNormal, keyEvent)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)

    return () => {
      document.removeEventListener('keydown', handleKeyboard)
    }
  })
  return (
    <>
    <div>
      <button className='controls-button' onClick={() => setIsNormal(true)}>
        Normal
      </button>
      <button className='controls-button' onClick={() => setIsNormal(false)}>
        Small
      </button>
      <Solver />
    </div >
    <div className='control-pad' onKeyDown={handleKeyboard}>
      {keys.map(key => {
        return <Key className={`controls-key ${isNormal || 'small'}`} isNormal={isNormal} num={key} key={key} />
      })}
    </div>
    <Key className='controls-key' isNormal={isNormal} num={0} key='0'></Key>
    </>
  )
}
