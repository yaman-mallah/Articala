import React from 'react'
import { Link } from 'react-router'

const ArrowLink = ({ text, herf, end }) => {
    return (
        <Link to={herf} className='purpleLink headlineSmall d-flex align-items-center'>
            {
                !end &&

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 12H3.75" stroke="#7E54E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="#7E54E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            }
            {text}
            {
                end &&
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 12H20.25" stroke="#7E54E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#7E54E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            }
        </Link>
    )
}

export default ArrowLink