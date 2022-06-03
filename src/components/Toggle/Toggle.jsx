import { useState } from 'react'

function Toggle ({ title, children }) {
  const [showToggle, setShowToggle] = useState(false)

  const handleToggle = (e) => {
    setShowToggle(prev => !prev)
  }

  return (
    <div>
      <header>
        <strong>
          {title}
        </strong>
        <button style={{ display: 'inline-block' }} className='btn' onClick={handleToggle}>
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
