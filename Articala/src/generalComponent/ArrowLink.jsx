import React from 'react'

const ArrowLink = ({text ,herf}) => {
    return (
        <a href={herf} className='purpleLink headlineSmall d-flex align-items-center'>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 12H3.75" stroke="#7E54E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="#7E54E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {text}
        </a>
    )
}

export default ArrowLink