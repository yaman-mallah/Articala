import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'
import { data, useNavigate, useParams } from 'react-router'
import { blogServices } from '../services/blogServices'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from 'react-bootstrap'
import { CRUDServices } from '../services/CRUDServices'
import { loginService } from '../services/loginService'
import { LoginContext } from '../context/loginContext'
import { ApiObject } from '../services/ApiObject'

const MyArticalesEdit = () => {
    let { id } = useParams()
    //getting all cats
    let [allCats, setAllCats] = useState({})
    useEffect(() => {
        blogServices.getCats()
            .then(data => setAllCats(data))
            .catch(err => console.error(err))
            .finally(() => { })
    }, [])
    let [allTags, setAllTags] = useState({})
    useEffect(() => {
        blogServices.getTags()
            .then(data => setAllTags(data))
            .catch(err => console.error(err))
            .finally(() => { })
    }, [])

    let [token, setToken] = useState()
    let [userData, setUserData] = useState()
    let { setGlobalToken } = useContext(LoginContext)
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
    useEffect(() => getToken, [])

    //in use in the html
    let [blogImgs, setBlogImgs] = useState({
        gallery: [],
        mainImg: {}
    })
    let [blogDetails, setBlogDetails] = useState({
        title: '',
        blog: '',
        mainImg: '',
        gallery: [],
        tags: [],
        cat: {}
    })
    //filling both bloImgs and blogDetails
    useEffect(() => {
        blogServices.getSinglePage(id)
            .then(data => {

                // console.log(data)
                setBlogImgs({
                    ...blogImgs,
                    mainImg: {
                        url: data.field_image[0].url,
                        id: data.field_image[0].target_id,
                    },
                    gallery: data.field_gallery.map(img => {
                        return (
                            {
                                id: img.target_id,
                                url: img.url
                            }
                        )
                    }),
                })
                setBlogDetails({
                    ...blogDetails,
                    title: data.title[0].value,
                    blog: data.body[0].value,
                    mainImg: data.field_image[0].target_id,
                    gallery: data.field_gallery.map(img => {
                        return ({
                            'target_id': img.target_id
                        })
                    }),
                    tags: data.field_tags.map(tag => {
                        return ({
                            'target_id': tag.target_id
                        })
                    }),
                    cat: data?.field_category[0]?.target_id,
                })
            })
    }, [])

    let [isLoading, setIsLoading] = useState({
        mainImg: false,
        gallery: false,
        update: false
    })
    let uploadMainImg = (e) => {
        setIsLoading({
            ...isLoading,
            mainImg: true
        })
        getToken()
        setIsLoading({
            ...isLoading,
            mainImg: true
        })
        let file = e.target.files[0]
        CRUDServices.uploadArticaleImg(token, userData.auth, file)
            .then(data => {
                // console.log(data)
                setBlogDetails({
                    ...blogDetails,
                    mainImg: data.fid[0].value
                })
                setBlogImgs({
                    ...blogImgs,
                    mainImg: {
                        id: data.fid[0].value,
                        url: 'https://tamkeen-dev.com/' + data.uri[0].url
                    }
                })
            })
            .catch((err) => console.error(err))
            .finally(() => {
                setIsLoading({
                    ...isLoading,
                    mainImg: false
                })
            })

    }
    let uploadingGallery = (e) => {
        setIsLoading({
            ...isLoading,
            gallery: true
        })
        getToken()
        let files = Array.from(e.target.files)
        
        files.map(file => {
            CRUDServices.uploadArticaleGallery(token, file, userData.auth)
                .then((data) => {
                    // console.log(data)
                    setBlogDetails({
                        ...blogDetails,
                        gallery: [
                            ...blogDetails.gallery,
                            { 'target_id': data.fid[0].value, }
                        ]
                    })
                    setBlogImgs(prev => ({
                        ...prev,
                        gallery: [
                            ...prev.gallery,
                            {
                                id: data.fid[0].value,
                                url: 'https://tamkeen-dev.com/' + data.uri[0].url
                            }
                        ]
                    }))
                })
                .finally(() => {
                    setIsLoading({
                        ...isLoading,
                        gallery: false
                    })
                })
        })
    }

    let [isDone, setIsDone] = useState(false)
    let [popup, setPopup] = useState(false)
    let [isEditing, setIsEditing] = useState(false)
    let navigaite = useNavigate()
    let sendApi = () => {
        setIsEditing(true)
        setIsLoading({
            ...isLoading,
            update: true,
        })
        getToken()
        CRUDServices.updateArticale(token, id, userData?.auth, blogDetails)
            .then((data) => {
                console.log(data)
                if (data.status == 200)
                    navigaite('/explore')
            })
            .finally(() => { setIsEditing(false) })
    }


    // useEffect(() => {
    //     console.log(blogDetails)
    // }, [blogDetails])


    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container>

                    <form action=""
                        className='d-flex flex-column gap-3 py-4'
                        onSubmit={(e) => {
                            e.preventDefault()
                            sendApi()
                        }}
                    >
                        <label
                            htmlFor=""
                            className='d-flex flex-column gap-2'
                        >
                            <h3>title</h3>
                            <input
                                onInput={(e) => {
                                    setBlogDetails({
                                        ...blogDetails,
                                        title: e.target.value
                                    })
                                }}
                                value={blogDetails.title}
                                type="text" />
                        </label>
                        <label
                            htmlFor=""
                            className='d-flex flex-column gap-2'
                        >
                            <h3>body</h3>
                            <textarea name="" id=""
                                className='w-100'
                                onInput={(e) => {
                                    setBlogDetails({
                                        ...blogDetails,
                                        blog: e.target.value
                                    })
                                }}
                                value={blogDetails.blog}
                            >


                            </textarea>
                        </label>
                        <label
                            htmlFor="mainImg"
                            className='d-flex flex-column gap-2'
                        >
                            <div className="d-flex gap-2 align-items-center">

                                <h5>upload main img</h5>

                                <div className="p-2">
                                    <svg width="30" height="28" viewBox="0 0 70 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M65 45.4947C67.3924 45.4947 69.332 47.4356 69.3333 49.828V58.4947C69.3333 63.2813 65.4533 67.1614 60.6667 67.1614H8.66667C3.8802 67.1614 0 63.2813 0 58.4947V49.828C0.00112667 47.4356 1.94077 45.4947 4.33333 45.4947C6.7259 45.4947 8.66554 47.4356 8.66667 49.828V58.4947H60.6667V49.828C60.668 47.4356 62.6076 45.4947 65 45.4947ZM31.9328 0.972296C33.6349 -0.415887 36.1439 -0.317998 37.7303 1.26852L53.9803 17.5185C55.6716 19.2109 55.6725 21.9542 53.9803 23.6461C52.2886 25.3369 49.5447 25.3369 47.853 23.6461L39 14.7932V45.499C38.9987 47.891 37.0591 49.8319 34.6667 49.8324C32.2742 49.8324 30.3346 47.891 30.3333 45.499V14.7932L21.4805 23.6461C19.7885 25.3369 17.0449 25.3369 15.3529 23.6461C13.6609 21.9542 13.6616 19.2109 15.3529 17.5185L31.603 1.26852L31.9328 0.972296Z" fill="#503493" />
                                    </svg>
                                </div>
                            </div>

                            <img
                                className='articaleMainImg'
                                src={blogImgs.mainImg.url}
                                alt="current upoaded img" />
                            <input
                                id='mainImg'
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    uploadMainImg(e)
                                }}
                                style={{display:'none'}}
                            />
                        </label>
                        <label
                            htmlFor="gallery"
                            className='d-flex align-items-center  gap-2'
                        >
                            <h5>upload gallery imgs</h5>
                            <div className="p-2">
                                <svg width="30" height="28" viewBox="0 0 70 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M65 45.4947C67.3924 45.4947 69.332 47.4356 69.3333 49.828V58.4947C69.3333 63.2813 65.4533 67.1614 60.6667 67.1614H8.66667C3.8802 67.1614 0 63.2813 0 58.4947V49.828C0.00112667 47.4356 1.94077 45.4947 4.33333 45.4947C6.7259 45.4947 8.66554 47.4356 8.66667 49.828V58.4947H60.6667V49.828C60.668 47.4356 62.6076 45.4947 65 45.4947ZM31.9328 0.972296C33.6349 -0.415887 36.1439 -0.317998 37.7303 1.26852L53.9803 17.5185C55.6716 19.2109 55.6725 21.9542 53.9803 23.6461C52.2886 25.3369 49.5447 25.3369 47.853 23.6461L39 14.7932V45.499C38.9987 47.891 37.0591 49.8319 34.6667 49.8324C32.2742 49.8324 30.3346 47.891 30.3333 45.499V14.7932L21.4805 23.6461C19.7885 25.3369 17.0449 25.3369 15.3529 23.6461C13.6609 21.9542 13.6616 19.2109 15.3529 17.5185L31.603 1.26852L31.9328 0.972296Z" fill="#503493" />
                                </svg>
                            </div>
                            <input
                                id='gallery'
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={uploadingGallery}
                                style={{ display: 'none' }}
                            />


                        </label>
                        <div className="d-flex gap-2 flex-wrap">

                            {
                                blogImgs.gallery.map((img, index) =>
                                    <div className='galleryImgBox position-relative' key={index}>
                                        <button
                                            className='removeButtonGallery'
                                            onClick={() => {
                                                setBlogImgs(prev => ({
                                                    ...prev,
                                                    gallery: prev.gallery.filter(g => g.id !== img.id)
                                                }))

                                                setBlogDetails(prev => ({
                                                    ...prev,
                                                    gallery: prev.gallery.filter(g => g.target_id !== img.id)
                                                }))
                                            }}
                                            type='button'
                                        >
                                            X
                                        </button>
                                        <img className='galleryImgs' key={index} src={img.url} />
                                    </div>
                                )
                            }
                        </div>

                        <div className=" createArticaleSwiperBox">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                            >
                                {/* {
                                    allCats.map(e => (
                                        <SwiperSlide>
                                            <div
                                                className='d-flex justify-content-center '
                                            >

                                                <button
                                                    className="addCatCard"
                                                    key={e.id}
                                                    type='button'

                                                    onClick={() => {
                                                        console.log(e.id)
                                                        setUnSubmitedChanges({
                                                            ...unSubmitedChanges,
                                                            cat: e.id
                                                        })
                                                    }}
                                                    style={unSubmitedChanges.cat == e.id || unSubmitedChanges.cat == null ? { opacity: 1 } : { opacity: 0.7 }}
                                                >
                                                    {e.name}
                                                </button>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                } */}
                            </Swiper>
                        </div>
                        <button
                            className='mainBtn textWhite'
                            style={!isLoading.gallery && !isLoading.mainImg ? { opacity: 1 } : { opacity: 0.4 }}
                            disabled={isLoading.gallery && isLoading.mainImg}
                            // disabled={!isReady}
                            type='button'
                            onClick={() => setPopup(true)}
                        >

                            submit

                        </button>
                        {
                            popup &&
                            <div className="checkingAlertBox">

                                <div className="checkingAlert p-3">
                                    <div
                                        className='w-100 d-flex justify-content-end'
                                    >
                                        <button
                                            onClick={() => {
                                                setPopup(false)
                                            }}
                                            type='button'

                                        >
                                            X
                                        </button>
                                    </div>
                                    <h5>are you sure you want to submit this changes ?</h5>
                                    <div className="d-flex gap-2">

                                        <button
                                            className='w-100 secondaryBtn'
                                            onClick={() => {
                                                setPopup(false)
                                            }}
                                            type='button'

                                        >
                                            cancel
                                        </button>
                                        <button
                                            className='mainBtn textWhite d-flex position-relative justify-content-center w-100'
                                            type='submit'

                                        >
                                            <div
                                                className="loadingCircle"
                                                style={isEditing ? { display: 'flex' } : { display: 'none' }}
                                            >
                                            </div>
                                            <p
                                                style={isEditing ? { display: 'none' } : { display: 'flex' }}>

                                                submit
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </form>
                </Container>

            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default MyArticalesEdit