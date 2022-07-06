import { useState } from 'react'
import './styles.scss'

function Toggle ({ title, children, home = false }) {
  const [showToggle, setShowToggle] = useState(false)

  const handleToggle = (e) => {
    setShowToggle(prev => !prev)
  }

  return (
    <div>
      <header className='toggle-header'>
        {home
          ? <h2 >{title}</h2>
          : <strong>{title}</strong>
        }
        <button style={{ display: 'inline-block' }} className={`btn ${home}`} onClick={handleToggle}>
          {showToggle ? '-' : '+'}
        </button>
      </header>
      <div>
        {showToggle ? children : ''}
      </div>
    </div>
  )
}

export default Toggle
