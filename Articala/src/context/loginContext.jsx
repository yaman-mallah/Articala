import React, { createContext, useEffect, useState } from 'react'
export const LoginContext = createContext(null)

export const LoginProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null)
    const [isLogedIn, setIsLoged] = useState(null)
    let [imgLink, setImgLink] = useState(null)
    let [articlesInfo, setArticlesInfo] = useState(null)
    let [globalToken, setGlobalToken] = useState(null)
    useEffect(() => {
    const data = localStorage.getItem('userData')
    const profileImg = localStorage.getItem('profileImg')
    const artInfo = localStorage.getItem('artInfo')

    if (data) {
        setUserInfo(JSON.parse(data))
        setIsLoged(true)

        if (profileImg) {
            setImgLink(JSON.parse(profileImg))
        } else {
            setImgLink(null)
        }

        if (artInfo) {
            setArticlesInfo(JSON.parse(artInfo))
        } else {
            setArticlesInfo(null)
        }

    } else {
        setIsLoged(false)
    }
}, [])
    useEffect(() => {
        if (imgLink)
            localStorage.setItem('profileImg', JSON.stringify(imgLink));
        // else
        //     localStorage.setItem('profileImg',JSON.stringify(null))
    }, [imgLink])
    useEffect(() => {
        console.log(globalToken)
        if (globalToken) {
            localStorage.setItem('token', JSON.stringify(globalToken));
        }
    }, [globalToken])
    useEffect(() => {
        console.log(isLogedIn)
    }, [isLogedIn])
    return (
        <LoginContext.Provider value={{ setUserInfo, setIsLoged, isLogedIn, userInfo, setImgLink, imgLink, setGlobalToken, globalToken }}>
            {children}
        </LoginContext.Provider>
    )
}

