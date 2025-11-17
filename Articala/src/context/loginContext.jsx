import React, { createContext, useEffect, useState } from 'react'
export const LoginContext = createContext(null)

export const LoginProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null)
    const [isLogedIn, setIsLoged] = useState(false)
    let [imgLink, setImgLink] = useState(null)
    useEffect(() => {
        let data = localStorage.getItem('userData')
        let profileImg=localStorage.getItem('profileImg')
        if (data) {
            setUserInfo(JSON.parse(data))
            setIsLoged(true)
            setImgLink(JSON.parse(profileImg))
        }
        else
            setIsLoged(false)
    }, [])
    return (
        <LoginContext.Provider value={{ setUserInfo, isLogedIn, userInfo ,setImgLink, imgLink }}>
            {children}
        </LoginContext.Provider>
    )
}

