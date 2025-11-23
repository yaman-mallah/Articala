import React, { act } from 'react'
import { Button } from 'react-bootstrap'

const LogBtn = ({ text, arrow, isLoading, onClick ,disabled }) => {
    // console.log(isLoading)
    // console.log(disabled)

    return (
        <button
            type="submit"
            className='logBtn d-flex align-items-center justify-content-center position-relative'
            disabled={disabled&&'disabled'}
                style={disabled ? { opacity: 0.6 } : { opacity: 1 }}
            onClick={()=>onClick()}
        >
            <div
                className='d-flex align-items-center gap-2'
                style={isLoading ? { opacity: 0 } : { opacity: 1 }}
            >

                <p>

                    {text}
                </p>
                {
                    arrow &&
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                }
            </div>
           
            <div 
            className="loadingCircle"
            style={isLoading?{display:'flex'}:{display:'none'}}
            >

            </div>
        </button>
    )
}

export default LogBtn