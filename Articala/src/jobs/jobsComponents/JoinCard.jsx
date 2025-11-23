import React from 'react'

const JoinCard = ({ start, end, title, text }) => {
    return (
        <div className={start ? "d-flex flex-column align-items-center gap-3 joinCardBox cardStart" : end ? "d-flex flex-column align-items-center gap-3 joinCardBox cardEnd" : "d-flex flex-column align-items-center gap-3 joinCardBox"}>
            <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 62.125C49.4975 62.125 61.25 50.2046 61.25 35.5C61.25 20.7954 49.4975 8.875 35 8.875C20.5025 8.875 8.75 20.7954 8.75 35.5C8.75 50.2046 20.5025 62.125 35 62.125Z" fill="#7E54E0" stroke="#7E54E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M47.0312 28.8438L30.9895 44.375L22.9688 36.6094" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className='headlineMid textMid'>
                {title ? { title } : <>Ut justo ligula, vehicula sed egestas vel.</>}
            </h3>
            <p className='titleMid textGray500'>
                {text ? { text } :
                    <>
                        Quisque leo leo, suscipit sed arcu sit amet, 
                        iaculis feugiat felis.
                    </>}

            </p>

        </div>
    )
}

export default JoinCard