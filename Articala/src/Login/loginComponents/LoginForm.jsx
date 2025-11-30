import React, { useContext, useEffect, useState } from 'react'
import MainBtn from '../../generalComponent/buttonsComponent/MainBtn'
import LogBtn from '../../generalComponent/buttonsComponent/logButton'
import { loginService } from '../../services/loginService'


import { useNavigate } from "react-router";
import { LoginContext } from '../../context/loginContext';
const LoginForm = () => {
    const { setUserInfo, setIsLoged, userInfo, setImgLink } = useContext(LoginContext)


    let [passwordIsVisible, setPasswordIsVisible] = useState(false)
    let [isSubmited, setIsSubmited] = useState(false)
    let [errorMessage, setErrorMessage] = useState()
    const navigate = useNavigate();
    let [loginInfo, setLoginInfo] = useState({
    })
    // useEffect(() => {
    //     console.log(loginInfo)
    //     console.log(errorMessage)
    // }, [loginInfo])

    let submitInfo = () => {
        setIsSubmited(true)
        loginService.login(loginInfo)
            .then(data => {
                console.log(data)
                setErrorMessage(false)
                let userData = {
                    token: data.csrf_token,
                    logout_token: data.logout_token,
                    current_user: data.current_user
                }
                localStorage.setItem('userData', JSON.stringify(userData))
                setUserInfo(userData)
                console.log(data.current_user.uid)

                loginService.getUserInfo(loginInfo, data.current_user.uid)
                    .then((data) => {
                        console.log(data);
                        setImgLink(data.user_picture[0].url);
                        setIsLoged(true)
                        console.log('is Setting')
                        
                        localStorage.setItem('profileImg',data.user_picture[0].url? JSON.stringify(data.user_picture[0].url):'../../assets/gerall/blank-profile-picture-973460_1280.webp')
                        localStorage.setItem('profileInfo', JSON.stringify(data))
                    })
                    .catch(() => console.log("something went wrong"));
               
            })
            .catch((err) => {
                // console.log(err)
                // console.error(err.message)
                setErrorMessage('the password or the user name is wrong')
                setIsSubmited(false)
            })
            .finally(()=> navigate("/"))

    }

    return (
        <form action=""
            onSubmit={(e) => {
                e.preventDefault()

            }}
            className='mainForm w-100'
        >
            <h1 className='heading02'>Sign in to your account</h1>
            <div className="d-flex flex-column BodyMedium400 gap-3">
                <label htmlFor="Email">
                    <p>Email</p>
                    <input
                        type="text"
                        placeholder='username or email address..'
                        onInput={(e) => {
                            setLoginInfo(
                                {
                                    ...loginInfo,
                                    'name': `${e.target.value}`
                                }
                            )
                        }}
                    />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <div className="d-flex inputPasswordBox">
                        <input
                            type={passwordIsVisible ? 'text' : 'password'}
                            placeholder='password'
                            onInput={(e) => {
                                setLoginInfo(
                                    {
                                        ...loginInfo,
                                        'pass': `${e.target.value}`
                                    }
                                )
                            }}
                        />
                        <button
                            type='button'
                            onClick={() => {
                                setPasswordIsVisible(e => e = !e)
                                console.log(passwordIsVisible)
                            }}
                        >{passwordIsVisible ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4.24902C4.5 4.24902 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 19.749 12 19.749C19.5 19.749 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 4.24902 12 4.24902Z" stroke="#4E5566" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="#4E5566" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg> :
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 0.75L1.5 21.75M12 4.33343C4.5 4.33343 1.5 12.0843 1.5 12.0843C1.5 12.0843 4.5 19.8334 12 19.8334C19.5 19.8334 22.5 12.0843 22.5 12.0843C22.5 12.0843 19.5 4.33343 12 4.33343Z" stroke="#4E5566" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 15.8342C14.0711 15.8342 15.75 14.1553 15.75 12.0842C15.75 10.0131 14.0711 8.33421 12 8.33421C9.92893 8.33421 8.25 10.0131 8.25 12.0842C8.25 14.1553 9.92893 15.8342 12 15.8342Z" stroke="#4E5566" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            }
                        </button>
                    </div>
                </label>
                <div className="d-flex justify-content-between">

                    <label htmlFor="Email" className='d-flex flex-row align-items-center gap-2 position-relative'>
                        <input className='checkboxInput' type="checkbox" placeholder='username or email address..' />
                        <span className="checkboxCustom"></span>
                        <p className='textGray500'>Remember me</p>
                    </label>
                    {/* <LogBtn text={'Sign in'} arrow={1} isLoading={isSubmited} onClick={submitInfo()} /> */}
                    <button
                        type="submit"
                        className='logBtn d-flex align-items-center justify-content-center position-relative'
                        disabled={!loginInfo.name || !loginInfo.pass}
                        onClick={() => submitInfo()}
                        style={!loginInfo.name || !loginInfo.pass ? { opacity: 0.6 } : { opacity: 1 }}

                    >
                        <div
                            className='d-flex align-items-center gap-2'
                            style={isSubmited ? { opacity: 0 } : { opacity: 1 }}
                        >
                            <p>
                                Sign in
                            </p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div
                            className="loadingCircle"
                            style={isSubmited ? { display: 'flex' } : { display: 'none' }}
                        >

                        </div>
                    </button>
                </div>
                <div
                    className="w-100 warningMessage"
                    style={errorMessage ? { opacity: 1 } : { opacity: 0 }}
                >
                    {errorMessage}
                </div>

            </div>
        </form>
    )
}

export default LoginForm