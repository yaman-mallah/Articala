import React from 'react'
import { Button } from 'react-bootstrap'

const SecondaryBtn = ({ isFullWidth, text }) => {
    return (
        <button
            className='secondaryBtn'
            style={isFullWidth?{width:'100%'}:null}

        >
            <p className='titleMid'>
                {text}
            </p>
        </button>
    )
}

export default SecondaryBtn