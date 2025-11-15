import React from 'react'
import { Button } from 'react-bootstrap'

const MainBtn = ({ isFullWidth, text }) => {
  return (
    <button
      className='mainBtn'
      style={isFullWidth ? { width: '100%' } : null}

    >
      <p className='titleMid textWhite'>
        {text}
      </p>
    </button>
  )
}

export default MainBtn