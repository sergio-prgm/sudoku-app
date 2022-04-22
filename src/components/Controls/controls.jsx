import { useState } from 'react'
import Key from '../Key/Key'
import './styles.scss'

export default function Controls () {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [isNormal, setIsNormal] = useState(true)

  return (
    <>
    <div>
      <button className='controls-button' onClick={() => setIsNormal(true)}>
        Normal
      </button>
      <button className='controls-button' onClick={() => setIsNormal(false)}>
        Small
      </button>
    </div>
    <div className='control-pad'>
      {keys.map(key => {
        return <Key className={`controls-key ${isNormal || 'small'}`} isNormal={isNormal} num={key} key={key} />
      })}
    </div>
    <Key className='controls-key' isNormal={isNormal} num={0} key='0'></Key>
    </>
  )
}
