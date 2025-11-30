import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

const MainBtn = ({ isFullWidth, text, herf }) => {
  return (
    <Link to={herf}
      className='mainBtn'
      style={isFullWidth ? { width: '100%' } : null}

    >
      <p className='titleMid textWhite'>
        {text}
      </p>
    </Link>
  )
}

export default MainBtn