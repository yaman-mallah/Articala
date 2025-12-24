import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router'
import { CRUDServices } from '../../services/CRUDServices';
import { useNavigate } from 'react-router';


const ExploreCard = ({ info, isMyArticale }) => {
    let [articaleTitle, setArticaleTitle] = useState(info.title)
    let [isDeleting, setIsDeleting] = useState(false)
    const navigate = useNavigate();



    useEffect(() => {

        if (info.title.length > 18) {
            setArticaleTitle('')
            for (let i = 0; i < 18; i++) {
                setArticaleTitle(e => e + info.title[i])
                if (info.title[i] == ' ') {
                    setArticaleTitle(info.title)
                    break;
                }
            }


        }
    }, [])
    let [userInfo, setUserInfo] = useState()
    useEffect(() => {
        let curToken = JSON.parse(localStorage.getItem('token'))
        let userData = JSON.parse(localStorage.getItem('userData'))
        setUserInfo({
            ...userInfo,
            auth:userData.auth,
            token: curToken,
        })
    }, [])
    useEffect(() => {
        // console.log(userInfo)
        // console.log(info)
    }, [userInfo])
    let deleteArticale = () => {

        CRUDServices.delete(userInfo.token, info.id,userInfo.auth)
            .then((data) => {
                console.log(data)

            })
            .finally(() => {
                setIsDeleting(false)
                navigate(0)
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            })
    }
    return (

        <>
            <div className="d-flex flex-column exploreCard position-relative p-3">
                {!isMyArticale &&
                    <div className="explreCardLink">

                        <Link to={`${info.id}`}>
                        </Link>
                    </div>
                }


                <img className='exploreCardImg' src={`https://tamkeen-dev.com/${info.field_image}`} alt={info.title + ' articale image'} />

                <div className="d-flex flex-column exploreCardBottom justify-content-between h-100">
                    <h3 className='titleLargRegular'>

                        {articaleTitle == info.title ? articaleTitle : articaleTitle + '...'}
                    </h3>
                    <div className="d-flex justify-content-between ">
                        <p
                            className='titleMid'
                        >
                            {info.author}
                        </p>
                        <p
                            className='textGray500'
                        >
                            {info.created}
                        </p>
                    </div>
                    {
                        isMyArticale &&
                        <div className="d-flex gap-2 pt-2">
                            <button
                                className='deletButton w-100'
                                onClick={() => {
                                    setIsDeleting(true)
                                }}
                            >
                                Delete
                            </button>
                            <Link
                                className='mainBtn d-flex align-items-center justify-content-center w-100 textWhite'
                                to={`${info.id}`}
                            >
                                Edit
                            </Link>
                        </div>
                    }
                </div>
            </div>
            {
                isDeleting &&
                <div className="checkingAlertBox">

                    <div className="checkingAlert p-3">
                        <div
                            className='w-100 d-flex justify-content-end'
                        >
                            <button
                                onClick={() => {
                                    setIsDeleting(false)
                                }}
                            >
                                X
                            </button>
                        </div>
                        <h5>are you sure you want to delete this blog '{info.title}' ?</h5>
                        <div className="d-flex gap-2">

                            <button
                                className='w-100 secondaryBtn'
                                onClick={() => {
                                    setIsDeleting(false)
                                }}
                            >
                                cancel
                            </button>
                            <button
                                className='deletButton w-100'
                                onClick={() => {
                                    deleteArticale()

                                }}

                            >
                                delete
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default ExploreCard