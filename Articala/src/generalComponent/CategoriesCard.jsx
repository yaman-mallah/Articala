import React, { useEffect, useState } from 'react'

const CategoriesCard = ({ title, body, index }) => {
    let [curColor, setCurColor] = useState('')

    useEffect(() => {

        if (index % 2 == 0) {
            setCurColor('bgPink')
        }
        else setCurColor('bgBage')
    }, [])
    return (
        <div className="catCardBox">

            <div className={`catCard ${curColor} position-relative`}>
                <div className="catCardTop d-none d-md-flex ">
                    {
                        curColor == 'bgPink' ?
                            <svg width="70" height="70" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M92.4238 22.1816H25.8786C25.3931 22.1816 24.9124 22.2773 24.4638 22.463C24.0153 22.6488 23.6077 22.9211 23.2644 23.2644C22.9211 23.6077 22.6488 24.0153 22.463 24.4638C22.2773 24.9123 22.1816 25.393 22.1816 25.8785V92.4223C22.1816 92.9077 22.2773 93.3885 22.463 93.837C22.6488 94.2855 22.9211 94.6931 23.2644 95.0364C23.6077 95.3797 24.0153 95.652 24.4638 95.8377C24.9124 96.0235 25.3931 96.1191 25.8786 96.1191H92.4238C92.9093 96.1191 93.39 96.0235 93.8386 95.8377C94.2871 95.652 94.6947 95.3797 95.038 95.0364C95.3813 94.6931 95.6536 94.2855 95.8394 93.837C96.0251 93.3885 96.1208 92.9077 96.1208 92.4223V25.8785C96.1208 25.393 96.0251 24.9123 95.8394 24.4638C95.6536 24.0153 95.3813 23.6077 95.038 23.2644C94.6947 22.9211 94.2871 22.6488 93.8386 22.463C93.39 22.2773 92.9093 22.1816 92.4238 22.1816ZM72.0905 72.0895H46.2119V46.2113H72.0905V72.0895Z" fill="#564FFD" />
                                <path d="M72.0906 46.2109H46.2119V72.0891H72.0906V46.2109Z" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M92.4238 22.1816H25.8786C23.8368 22.1816 22.1816 23.8368 22.1816 25.8785V92.4223C22.1816 94.464 23.8368 96.1191 25.8786 96.1191H92.4238C94.4656 96.1191 96.1208 94.464 96.1208 92.4223V25.8785C96.1208 23.8368 94.4656 22.1816 92.4238 22.1816Z" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M96.1211 48.0596H107.212" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M96.1211 70.2402H107.212" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.0908 48.0596H22.1817" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.0908 70.2402H22.1817" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M70.2422 96.1191V107.21" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M48.0605 96.1191V107.21" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M70.2422 11.0908V22.1814" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M48.0605 11.0908V22.1814" stroke="#564FFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg> :
                            <svg width="70" height="70" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M92.4238 22.1816H25.8786C25.3931 22.1816 24.9124 22.2773 24.4638 22.463C24.0153 22.6488 23.6077 22.9211 23.2644 23.2644C22.9211 23.6077 22.6488 24.0153 22.463 24.4638C22.2773 24.9123 22.1816 25.393 22.1816 25.8785V92.4223C22.1816 92.9077 22.2773 93.3885 22.463 93.837C22.6488 94.2855 22.9211 94.6931 23.2644 95.0364C23.6077 95.3797 24.0153 95.652 24.4638 95.8377C24.9124 96.0235 25.3931 96.1191 25.8786 96.1191H92.4238C92.9093 96.1191 93.39 96.0235 93.8386 95.8377C94.2871 95.652 94.6947 95.3797 95.038 95.0364C95.3813 94.6931 95.6536 94.2855 95.8394 93.837C96.0251 93.3885 96.1208 92.9077 96.1208 92.4223V25.8785C96.1208 25.393 96.0251 24.9123 95.8394 24.4638C95.6536 24.0153 95.3813 23.6077 95.038 23.2644C94.6947 22.9211 94.2871 22.6488 93.8386 22.463C93.39 22.2773 92.9093 22.1816 92.4238 22.1816ZM72.0905 72.0895H46.2119V46.2113H72.0905V72.0895Z" fill="#FFF9E5" />
                                <path d="M72.0906 46.2109H46.2119V72.0891H72.0906V46.2109Z" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M92.4238 22.1816H25.8786C23.8368 22.1816 22.1816 23.8368 22.1816 25.8785V92.4223C22.1816 94.464 23.8368 96.1191 25.8786 96.1191H92.4238C94.4656 96.1191 96.1208 94.464 96.1208 92.4223V25.8785C96.1208 23.8368 94.4656 22.1816 92.4238 22.1816Z" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M96.1211 48.0596H107.212" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M96.1211 70.2402H107.212" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.0908 48.0596H22.1817" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.0908 70.2402H22.1817" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M70.2422 96.1191V107.21" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M48.0605 96.1191V107.21" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M70.2422 11.0908V22.1814" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M48.0605 11.0908V22.1814" stroke="#B4AD8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                    }
                </div>
                <div className="d-flex flex-column align-items-center">
                    <h3 className='headlineLargmid'>
                        {title}
                    </h3>
                    <p className="headlineSmall text-align-center">
                        {body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CategoriesCard