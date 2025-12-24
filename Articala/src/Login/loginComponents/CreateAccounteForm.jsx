import React, { useContext, useEffect, useState } from 'react'
import LogBtn from '../../generalComponent/buttonsComponent/logButton'
import { loginService } from '../../services/loginService'
import { useNavigate } from "react-router";
import { LoginContext } from '../../context/loginContext';

const CreateAccounteForm = () => {
    let [passwordIsVisible, setPasswordIsVisible] = useState(true)
    let [userData, setUserData] = useState({
        fname: '',
        lname: '',
        userName: '',
        email: '',
        pass: '',
        phone: '',
    })
    let [isCreated, setIsCreated] = useState(false)
    let [isAcitve, setIsActive] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let [token, setToken] = useState('')
     let getToken = () => {
            loginService.getToken()
                .then((data) => {
                    setToken(`${data}`)
                    setGlobalToken(data)
    
                })
                .catch((err) => {
                    console.error(err)
                })
                .finally(() => { })
            setUserData(JSON.parse(localStorage.getItem('userData')))
    
        }
        useEffect(()=>{getToken()},[])
    let [password, setPassword] = useState({
        pass1: '',
        pass2: ''
    })
    let [CreateError,setCreateError]=useState(null)
    let { setUserInfo,setGlobalToken } = useContext(LoginContext)
    let submit = () => {
        setIsLoading(true)
        setIsActive(false)
        loginService.createAccounte({
            fName: userData.fname,
            userName: userData.userName,
            LName: userData.lname,
            Email: userData.email,
            Mobile: userData.phone,
            pass: userData.pass,
        })
            .then((data) => {
                // setIsLoading(true)
                console.log(data)
                // let userD = {
                //     token: token,
                //     logout_token: data.logout_token,
                //     current_user: {
                //         name: data.name[0].value,
                //         uid: data.uid[0].value
                //     },
                // }
                // userD = { ...userD, auth: `Basic ${btoa(`${userD.current_user.name}:${userD.pass}`)}` }
                // localStorage.setItem('userData', JSON.stringify(userD))
                setUserInfo(userData)
                if (data.field_surname) {
                    setIsCreated(true)
                }
                // loginService.
            })
            .catch((err) => setCreateError(err))
            .finally(() => setIsLoading(false))
    }


    useEffect(() => {
        if (password.pass1 == password.pass2 || password.pass1 != '')
            setUserData({
                ...userData,
                pass: password.pass1
            })
        console.log(password)
    }, [])
    useEffect(() => {
        if (userData.fname != ''
            && userData.lname != ''
            && userData.userName != ''
            && userData.email != ''
            && userData.phone != ''
            && userData.pass != ''
        ) {
            setIsActive(true)
            // console.log(setIsActive)
        }
    }, [userData])
    let navigate = useNavigate();

    useEffect(() => {

        if (isCreated) {
            navigate("/login");
        }
    }, [isCreated])



    // const handleImage = (e) => {
    //     const file = e.target.files[0];
    //     if (!file) return;

    //     const reader = new FileReader();

    //     reader.onloadend = () => {
    //         // base64 string result
    //         const base64String = reader.result;

    //         // save to userData
    //         setUserData({
    //             ...userData,
    //             image: base64String
    //         });

    //         console.log("Base64 image:", base64String);
    //     };

    //     reader.readAsDataURL(file); // convert to base64
    // };

    // if (localStorage.getItem('userData'))
    //     navigate('/')

    return (
        <form action=""
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className='mainForm w-100'
        >
            <h1 className='heading02'>Create your account</h1>
            <div className="d-flex flex-column BodyMedium400 gap-3">
                <label htmlFor="name">
                    <p>Full Name</p>
                    <div className="d-flex gap-3">
                        <input
                            type="text"
                            placeholder='first name'
                            onInput={(e) => {
                                setUserData({
                                    ...userData,
                                    fname: e.target.value
                                })
                            }}
                        />
                        <input
                            type="text"
                            placeholder='last name'
                            onInput={(e) => {
                                setUserData({
                                    ...userData,
                                    lname: e.target.value
                                })
                            }}
                        />
                    </div>
                </label>
                <label htmlFor="last name">
                    <p>mobile</p>
                    <input
                        type="number"
                        placeholder='ex: 963 000 0000'
                        onInput={(e) => {
                            setUserData({
                                ...userData,
                                phone: e.target.value
                            })
                        }}
                    />
                </label>
                <label htmlFor="user name">
                    <p>username</p>
                    <input
                        type="text"
                        placeholder='username'
                        onInput={(e) => {
                            setUserData({
                                ...userData,
                                userName: e.target.value
                            })
                        }}
                    />
                </label>
                <label htmlFor="Email">
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder='username or email address..'
                        onInput={(e) => {
                            setUserData({
                                ...userData,
                                email: e.target.value
                            })
                        }}
                    />
                </label>
                {/* <label htmlFor="image" className='w-100 position-relative'>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImage(e)}
                        className='imgInput'

                    />
                    <div className="d-flex gap-3 py-3 w-100">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" rx="5" fill="#E2E6EC" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.666 37.0003C28.666 34.6071 30.6061 32.667 32.9993 32.667H66.9993C69.3926 32.667 71.3327 34.6071 71.3327 37.0003V63.667C71.3327 66.0602 69.3926 68.0003 66.9993 68.0003H32.9993C30.6061 68.0003 28.666 66.0602 28.666 63.667V37.0003ZM32.9993 34.667C31.7107 34.667 30.666 35.7117 30.666 37.0003V63.667C30.666 64.9557 31.7107 66.0003 32.9993 66.0003H66.9993C68.288 66.0003 69.3327 64.9557 69.3327 63.667V37.0003C69.3327 35.7117 68.288 34.667 66.9993 34.667H32.9993Z" fill="#B2B9C4" />
                            <circle cx="38.6654" cy="42.0003" r="4.33333" fill="#B2B9C4" />
                            <path d="M34.332 60.334V58.3577C34.332 57.9156 34.5076 57.4917 34.8202 57.1792L40.2083 51.791C40.8374 51.162 41.8496 51.1379 42.5079 51.7363L43.8393 52.9466C44.4908 53.539 45.4908 53.5222 46.1222 52.9084L55.8204 43.4795C56.4738 42.8443 57.5163 42.8516 58.1607 43.496L65.8439 51.1792C66.1564 51.4917 66.332 51.9156 66.332 52.3577V60.334C66.332 61.2545 65.5858 62.0007 64.6654 62.0007H35.9987C35.0782 62.0007 34.332 61.2545 34.332 60.334Z" fill="#B2B9C4" />
                        </svg>
                        <div className="d-flex flex-column gap-2 w-100">
                            <p>Please upload square image, size less than 800 kb</p>
                            <div className="imgInputbox p-3 d-flex gap-3 align-items-center">
                                <button className='fileUpload'>
                                    choose file
                                </button>
                                <p>No File Chosen</p>
                            </div>
                        </div>
                    </div>
                </label> */}
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
                                    if (e.target.value == password.pass2) {
                                        setUserData({
                                            ...userData,
                                            pass: e.target.value
                                        })
                                    } else {
                                        setUserData({
                                            ...userData,
                                            pass: ''
                                        })
                                    }

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
                                    if (e.target.value == password.pass1) {
                                        setUserData({
                                            ...userData,
                                            pass: e.target.value
                                        })
                                    } else {
                                        setUserData({
                                            ...userData,
                                            pass: ''
                                        })
                                    }
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

                    <p className={password.pass1 == password.pass2 ? 'p-2 opacity-0' : 'p-2 opacity-1 textRed'}>
                        the password is mis matched
                    </p>
                </label>
                <div className="line w-100">
                </div>
                <div className="d-flex justify-content-between">
                    <label htmlFor="" className='d-flex flex-row align-items-center gap-2 position-relative'>
                        <input className='checkboxInput' type="checkbox" placeholder='username or email address..' />
                        <span className="checkboxCustom"></span>
                        <p className='textGray500'>I Agree with all of your <a href="" className='textPurple'>Terms & Conditions </a></p>
                    </label>
                    <LogBtn text={'Create account'} arrow={1} onClick={submit} disabled={!isAcitve} isLoading={isLoading} />
                </div>
                {
                    CreateError?
                    <p className='textRed'>
                        {CreateError.message}
                    </p>
                    :''
                }

            </div>
        </form>
    )
}

export default CreateAccounteForm