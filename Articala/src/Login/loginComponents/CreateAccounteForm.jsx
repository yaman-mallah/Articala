import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LogBtn from '../../generalComponent/buttonsComponent/logButton'
import { loginService } from '../../services/loginService'
import { data } from 'react-router'

const CreateAccounteForm = () => {
    let [passwordIsVisible, setPasswordIsVisible] = useState(true)
    let [useInfo, setUserInfo] = useState({
        fname: '',
        lname: '',
        userName: '',
        email: '',
        pass: '',
        phone: '',
    })
    let [isCreated, setIsCreated] = useState(false)
    let [isAcitve, setIsActive] = useState(false)
    let [password, setPassword] = useState({
        pass1: '',
        pass2: ''
    })
    let submit = () => {
        loginService.createAccounte({
            fName: useInfo.fname,
            userName: useInfo.userName,
            LName: useInfo.lname,
            Email: useInfo.email,
            Mobile: useInfo.phone,
            pass: useInfo.pass,
        })
            .then((data) => console.log(data))
            .catch((err) => console.log('this..........' + err))
    }
    useEffect(() => {
        if (useInfo.fname != ''
            && useInfo.lname != ''
            && useInfo.userName != ''
            && useInfo.email != ''
            && useInfo.phone != ''
            && useInfo.pass != ''
        ) {
            setIsActive(true)
        }
    }, useInfo)
    // useEffect(()=>{
    //     console.log(useInfo)
    // },[useInfo])
    return (
        <form action=""
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className='mainForm w-100'
        >
            <h1 className='heading02'>Create your account</h1>
            <div className="d-flex flex-column BodyMedium400 gap-3">
                <label htmlFor="Email">
                    <p>Full Name</p>
                    <div className="d-flex gap-3">
                        <input
                            type="text"
                            placeholder='first name'
                            onInput={(e) => {
                                setUserInfo({
                                    ...useInfo,
                                    fname: e.target.value
                                })
                            }}
                        />
                        <input
                            type="text"
                            placeholder='last name'
                            onInput={(e) => {
                                setUserInfo({
                                    ...useInfo,
                                    lname: e.target.value
                                })
                            }}
                        />
                    </div>
                </label>
                <label htmlFor="Email">
                    <p>mobile</p>
                    <input
                        type="text"
                        placeholder='ex: 963 000 0000'
                        onInput={(e) => {
                            setUserInfo({
                                ...useInfo,
                                phone: e.target.value
                            })
                        }}
                    />
                </label>
                <label htmlFor="Email">
                    <p>username</p>
                    <input
                        type="text"
                        placeholder='username'
                        onInput={(e) => {
                            setUserInfo({
                                ...useInfo,
                                userName: e.target.value
                            })
                        }}
                    />
                </label>
                <label htmlFor="Email">
                    <p>Email</p>
                    <input
                        type="text"
                        placeholder='username or email address..'
                        onInput={(e) => {
                            setUserInfo({
                                ...useInfo,
                                email: e.target.value
                            })
                        }}
                    />
                </label>
                <label htmlFor="image">
                    <input
                        type="file"
                    // onChange={ }
                    />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <div className="d-flex gap-2">

                        <div className="d-flex inputPasswordBox">
                            <input
                                type={passwordIsVisible ? 'text' : 'password'}
                                placeholder='password'
                                onInput={(e) => {
                                    setPassword({
                                        ...password,
                                        pass1: e.target.value
                                    })
                                }}
                            />
                            <button
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
                        <div className="d-flex inputPasswordBox">
                            <input
                                type={passwordIsVisible ? 'text' : 'password'}
                                placeholder='password'
                                onInput={(e) => {
                                    setPassword({
                                        ...password,
                                        pass2: e.target.value
                                    })
                                }}
                            />
                            <button
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
                    </div>
                </label>
                <div className="line w-100">
                </div>
                <div className="d-flex justify-content-between">

                    <label htmlFor="Email" className='d-flex flex-row align-items-center gap-2 position-relative'>
                        <input className='checkboxInput' type="checkbox" placeholder='username or email address..' />
                        <span className="checkboxCustom"></span>
                        <p className='textGray500'>I Agree with all of your <a href="" className='textPurple'>Terms & Conditions </a></p>
                    </label>
                    <LogBtn text={'Create account'} arrow={1} onClick={submit} />
                </div>

            </div>
        </form>
    )
}

export default CreateAccounteForm