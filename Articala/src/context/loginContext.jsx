import React, { createContext, useEffect, useState } from 'react'
export const LoginContext = createContext(null)

export const LoginProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null)
    const [isLogedIn, setIsLoged] = useState(false)
    let [imgLink, setImgLink] = useState(null)
    let [articlesInfo, setArticlesInfo] = useState(null)
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
    }, [imgLink])
    return (
        <LoginContext.Provider value={{ setUserInfo, setIsLoged, isLogedIn, userInfo, setImgLink, imgLink }}>
            {children}
        </LoginContext.Provider>
    )
}

