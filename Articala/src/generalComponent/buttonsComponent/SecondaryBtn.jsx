import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

const SecondaryBtn = ({ isFullWidth, text, herf }) => {
    return (
        <Link 
            to={herf}
            className='secondaryBtn'
            style={isFullWidth?{width:'100%'}:null}

        >
            <p className='titleMid textBlack'>
                {text}
            </p>
        </Link>
    )
}

export default SecondaryBtn