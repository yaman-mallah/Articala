import React from 'react'
import { Link } from 'react-router'

const TransperentBtn = ({ isFullWidth, text, herf }) => {
    return (
        <Link to={herf}
            className='transperentBtn'
            style={isFullWidth ? { width: '100%' } : null}

        >
            <p className='titleMid' style={{ color: '#ffffff' }}>
                {text}
            </p>
        </Link>
    )
}

export default TransperentBtn