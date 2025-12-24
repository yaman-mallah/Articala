import React, { useContext, useEffect, useRef, useState } from 'react'
import { adminServices } from '../../services/adminServices'
import { useNavigate } from 'react-router'
import { LoginContext } from '../../context/loginContext'
import { CRUDServices } from '../../services/CRUDServices'
import { loginService } from '../../services/loginService'

const UsersList = (search) => {
    let [userData, setUserData] = useState()
    let navigate = useNavigate()
    let [urlArray, setUrlArray] = useState([])

    let [isLoading, setIsLoading] = useState(true)
    let [isDeletingDone, setIsDeletingDone] = useState(true)


    let { isLogedIn } = useContext(LoginContext)
    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('userData')))
    }, [])
    useEffect(() => {

        if (userData) {
            navigate('/')
        }
    }, [])

    let [currentPage, setCurrentPage] = useState(0)
    let [users, setUsers] = useState({})
    let getApi = () => {
        setIsLoading(true)
        console.log(userData)
        adminServices.getUsers(userData?.auth, currentPage, search)
            .then(data => {
                console.log(data)
                setUsers(data)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        getApi()
    }, [userData])
    useEffect(() => {
        console.log(currentPage)
        getApi()
    }, [currentPage])

    useEffect(() => {
        getApi()
    }, [search])

    useEffect(() => {
        if (!users?.rows) return

        const DOMAIN = 'https://tamkeen-dev.com'

        const urls = users.rows
            .map(user => {
                if (!user.user_picture) return null

                const parser = new DOMParser()
                const doc = parser.parseFromString(user.user_picture, 'text/html')
                const img = doc.querySelector('img')
                if (!img) return null

                const src = img.getAttribute('src')
                return src.startsWith('http') ? src : DOMAIN + src
            })
            .filter(Boolean)
        setUrlArray(urls)
    }, [users])

    let [token, setToken] = useState('')
    let { setGlobalToken } = useContext(LoginContext)

    let getToken = () => {
        setIsDeletingDone(false)
        loginService.getToken()
            .then((data) => {
                setToken(`${data}`)
                setGlobalToken(data)

            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => { setIsDeletingDone(true) })
        setUserData(JSON.parse(localStorage.getItem('userData')))

    }

    let [isDeleting, setIsDeleting] = useState({
        status: false,
        name: null,
        id: null
    })
    useEffect(() => {
        getToken()
    }, [])
    let deletUser = (id) => {
        getToken()
        CRUDServices.deleteUser(token, id, userData.auth)
            .then((data) => console.log(data))
            .finally(() => {
                setIsDeleting({
                    status: false,
                    name: null,
                    id: null
                })
            })
    }
    if (isLoading)
        return (
            <div className="galleryLoadingScreen d-flex justify-content-center align-items-center">
                <div className="loadingCircle purpleBorder"></div>
            </div>
        )

    else
        return (
            <div className="d-flex flex-column pb-3">
                <div className="d-flex flex-column pt-3">
                </div>
                {users?.rows?.map((user, index) => {
                    let userName = ''
                    for (let i = 0; i < 7; i++) {
                        if (user.name[i])
                            userName += user.name[i]
                    }
                    if (user.name.length > 7)
                        userName += '...'
                    let email = ''
                    for (let i = 0; i < 12; i++) {
                        if (user.mail[i])
                            email += user.mail[i]
                    }
                    if (user.name.length > 12)
                        email += '...'


                    return (
                        <div className="usersCard d-flex align-items-center justify-content-between" key={user.id}>
                            <div className="d-flex gap-4 align-items-center">
                                <img src={urlArray[index] ?
                                    urlArray[index] : 'https://tamkeen-dev.com//api/sites/default/files/2025-12/__0.jpeg'}
                                    alt={`${user.name} profile image `}
                                />
                                {userName}
                            </div>
                            <p>
                                {email}
                            </p>
                            <div

                            >
                                <button
                                    className='textRed deleteBtn'
                                    onClick={() => setIsDeleting({
                                        status: true,
                                        name: user.name,
                                        id: user.uid
                                    })}
                                >
                                    delete
                                </button>
                            </div>
                        </div>
                    )
                })}
                {
                    isDeleting.status &&
                    <div className="checkingAlertBox">

                        <div className="checkingAlert p-3">
                            <div
                                className='w-100 d-flex justify-content-end'
                            >
                                <button
                                    onClick={() => {
                                        setIsDeleting({
                                            status: false,
                                            name: null,
                                            id: null
                                        })
                                    }}
                                >
                                    X
                                </button>
                            </div>
                            <h5>are you sure you want to delete {isDeleting.name}'s account ?</h5>
                            <div className="d-flex gap-2">

                                <button
                                    className='w-100 secondaryBtn'
                                    onClick={() => {
                                        setIsDeleting({
                                            status: false,
                                            name: null,
                                            id: null
                                        })
                                    }}
                                >
                                    cancel
                                </button>
                                <button
                                    className='deletButton w-100 position-relative'
                                    onClick={() => {
                                        deletUser(isDeleting.id)

                                    }}

                                >
                                    <div
                                        className="loadingCircle borderColorRed"
                                        style={isDeletingDone ? { display: 'none' } : { display: 'flex' }}
                                    >

                                    </div>
                                    <p
                                        style={!isDeletingDone ? { display: 'none' } : { display: 'flex' }}

                                    >

                                        delete
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                }
                <div className="d-flex align-items-center py-3 justify-content-between">
                    <button
                        className='mainBtn textWhite'
                        onClick={() => setCurrentPage(pre => pre -= 1)}
                        disabled={currentPage == 0}
                    >
                        pre
                    </button>
                    <div className="">
                        {users?.pager?.current_page + 1} / {+ users?.pager?.total_pages}
                    </div>
                    <button
                        className='mainBtn textWhite'
                        onClick={() => setCurrentPage(pre => pre += 1)}
                        disabled={currentPage == users?.pager?.total_pages - 1}
                    >
                        next
                    </button>
                </div>
            </div>
        
        )
}

export default UsersList