import React from 'react'

const TransperentBtn = ({isFullWidth,text}) => {
    return (
        <button
            className='transperentBtn'
            style={isFullWidth ? { width: '100%' } : null}

        >
            <p className='titleMid' style={{color:'#ffffff'}}>
                {text}
            </p>
        </button>
    )
}

export default TransperentBtn