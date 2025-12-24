import React, { createContext, useEffect, useState } from 'react'
export const LoginContext = createContext(null)

export const LoginProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null)
    const [isLogedIn, setIsLoged] = useState(false)
    let [imgLink, setImgLink] = useState(null)
    let [articlesInfo, setArticlesInfo] = useState(null)
    let [globalToken, setGlobalToken] = useState(null)
    useEffect(() => {
        let data = localStorage.getItem('userData')
        let profileImg = localStorage.getItem('profileImg')
        let artIfno = localStorage.getItem('artInfo')
        if (data) {
            setUserInfo(JSON.parse(data))
            setIsLoged(true)
            setImgLink(JSON.parse(profileImg))
            setArticlesInfo(JSON.parse(artIfno))
        }
        else
            setIsLoged(false)
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
        console.log(imgLink)
    }, [imgLink])
    return (
        <LoginContext.Provider value={{ setUserInfo, setIsLoged, isLogedIn, userInfo, setImgLink, imgLink, setGlobalToken, globalToken }}>
            {children}
        </LoginContext.Provider>
    )
}

