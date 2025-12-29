import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { blogServices } from '../../services/blogServices'
import { CRUDServices } from '../../services/CRUDServices'
import { loginService } from '../../services/loginService'
import { LoginContext } from '../../context/loginContext'
import AllAritcalesGallery from '../../allArticales/AllAritcalesGallery'
import { ApiObject } from '../../services/ApiObject'
import { useNavigate } from 'react-router'


const CreateForm = () => {

    let navigaite = useNavigate()
    let [allCats, setAllCats] = useState([])
    let [isReady, setIsReady] = useState(false)
    let [isLoading, setIsLoading] = useState({
        gallery: false,
        mainImg: false,
    })
    let [galleryIds, setGalleryIds] = useState([])

    let [articaleInfo, setArticaleInfo] = useState({ tags: [], galleryimg: [] })

    let [token, setToken] = useState('')
    let [userData, setUserData] = useState()
    let { setGlobalToken, isLogedIn } = useContext(LoginContext)
    if (!isLogedIn) {
        navigaite('/login')
    }
    let [tags, setTags] = useState([])



    // brings tags and inject them in a state
    useEffect(() => {
        blogServices.getTags()
            .then(data => {
                console.log(data)
                setTags(data)
            })
            .catch(err => console.error(err))
            .finally(() => { })
    }, [])

    // brings cats and inject them in a state
    useEffect(() => {
        blogServices.getCats()
            .then((data) => {
                setAllCats(data)
            })
            .catch((err) => console.error(err))
            .finally(() => { })
    }, [])

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
    // useEffect(() => {
    //     if (userData?.auth == undefined)
    //         navigaite('/login')
    // }, [userData])


    useEffect(() => {
        getToken()
    }, [])

    let uploadMainImg = (e) => {
        setIsLoading({
            ...isLoading,
            'mainImg': true
        })
        let file = e.target.files[0]
        getToken()
        CRUDServices.uploadArticaleImg(token, userData.auth, file)
            .then((data) => {
                // console.log(data.uri[0].url)
                setArticaleInfo({
                    ...articaleInfo,
                    mainImgId: {
                        id: data.fid[0].value,
                        url: 'https://tamkeen-dev.com/' + data.uri[0].url
                    }
                })
            })
            .catch(err => console.error(err))
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
        const selectedFiles = Array.from(e.target.files)
        console.log(selectedFiles)
        getToken()
        selectedFiles.map((file, index) => {
            CRUDServices.uploadArticaleGallery(token, file, userData.auth)
                .then(data => {
                    console.log(data)
                    setArticaleInfo(prev => ({
                        ...prev,
                        galleryimg: [
                            ...prev.galleryimg,
                            {
                                id: data.fid[0].value,
                                url: 'https://tamkeen-dev.com/' + data.uri[0].url
                            }
                        ]
                    }))

                    setGalleryIds(prev => ([
                        ...prev,
                        { target_id: data.fid[0].value }
                    ]))

                })
                .finally(() => {
                    setIsLoading({
                        ...isLoading,
                        gallery: false
                    })
                })
        })

    }
    useEffect(() => {

        console.log(articaleInfo)
        console.log(galleryIds)
    }, [articaleInfo])






    //make sure every thing is ready before allowing the user to post
    useEffect(() => {
        const ready =
            articaleInfo.title?.trim() &&
            articaleInfo.body?.trim() &&
            articaleInfo.mainImgId?.id &&
            articaleInfo.cat

        setIsReady(Boolean(ready))
    }, [articaleInfo])
    useEffect(() => {
        console.log(isReady)

    }, [isReady])



    let sendApi = () => {

        getToken()
        CRUDServices.createArticle(token, articaleInfo, userData.auth, galleryIds)
            .then(data => {
                if (data.status[0].value == true) {
                    navigaite('/my-articales')
                }
            })
            .finally(() => {
                console.log('upload is done')
            })
    }

    useEffect(() => {
        console.log(articaleInfo)
    }, [articaleInfo])

    return (
        <>
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
                            setArticaleInfo({
                                ...articaleInfo,
                                title: e.target.value
                            })
                        }}
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
                            setArticaleInfo({
                                ...articaleInfo,
                                body: e.target.value
                            })
                        }}
                    ></textarea>
                </label>
                <label
                    htmlFor="mainImg"
                    className='d-flex flex-column gap-2'
                >
                    <div className="d-flex gap-3 align-items-center">

                        <h5>upload main img</h5>
                        <div className="p-2">
                            <svg width="30" height="28" viewBox="0 0 70 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65 45.4947C67.3924 45.4947 69.332 47.4356 69.3333 49.828V58.4947C69.3333 63.2813 65.4533 67.1614 60.6667 67.1614H8.66667C3.8802 67.1614 0 63.2813 0 58.4947V49.828C0.00112667 47.4356 1.94077 45.4947 4.33333 45.4947C6.7259 45.4947 8.66554 47.4356 8.66667 49.828V58.4947H60.6667V49.828C60.668 47.4356 62.6076 45.4947 65 45.4947ZM31.9328 0.972296C33.6349 -0.415887 36.1439 -0.317998 37.7303 1.26852L53.9803 17.5185C55.6716 19.2109 55.6725 21.9542 53.9803 23.6461C52.2886 25.3369 49.5447 25.3369 47.853 23.6461L39 14.7932V45.499C38.9987 47.891 37.0591 49.8319 34.6667 49.8324C32.2742 49.8324 30.3346 47.891 30.3333 45.499V14.7932L21.4805 23.6461C19.7885 25.3369 17.0449 25.3369 15.3529 23.6461C13.6609 21.9542 13.6616 19.2109 15.3529 17.5185L31.603 1.26852L31.9328 0.972296Z" fill="#503493" />
                            </svg>
                        </div>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        id='mainImg'
                        // onChange={(e) => {
                        // console.log(e.target.files[0])
                        // setArticaleInfo({
                        //     ...articaleInfo,
                        //     img: e.target.files[0]
                        // })

                        // }}
                        onChange={uploadMainImg}
                        style={{ display: 'none' }}

                    />
                    {
                        articaleInfo?.mainImgId &&
                        <img
                            className='articaleMainImg'
                            src={articaleInfo?.mainImgId?.url}
                            alt="current upoaded img" />
                    }

                </label>
                <label
                    htmlFor="galleryInput"
                    className='d-flex flex-column gap-2'
                >
                    <div className="d-flex gap-3 align-items-center">

                        <h5>upload gallery images</h5>
                        <div className="p-2">
                            <svg width="30" height="28" viewBox="0 0 70 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65 45.4947C67.3924 45.4947 69.332 47.4356 69.3333 49.828V58.4947C69.3333 63.2813 65.4533 67.1614 60.6667 67.1614H8.66667C3.8802 67.1614 0 63.2813 0 58.4947V49.828C0.00112667 47.4356 1.94077 45.4947 4.33333 45.4947C6.7259 45.4947 8.66554 47.4356 8.66667 49.828V58.4947H60.6667V49.828C60.668 47.4356 62.6076 45.4947 65 45.4947ZM31.9328 0.972296C33.6349 -0.415887 36.1439 -0.317998 37.7303 1.26852L53.9803 17.5185C55.6716 19.2109 55.6725 21.9542 53.9803 23.6461C52.2886 25.3369 49.5447 25.3369 47.853 23.6461L39 14.7932V45.499C38.9987 47.891 37.0591 49.8319 34.6667 49.8324C32.2742 49.8324 30.3346 47.891 30.3333 45.499V14.7932L21.4805 23.6461C19.7885 25.3369 17.0449 25.3369 15.3529 23.6461C13.6609 21.9542 13.6616 19.2109 15.3529 17.5185L31.603 1.26852L31.9328 0.972296Z" fill="#503493" />
                            </svg>
                        </div>
                    </div>
                    <input
                        id='galleryInput'
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={uploadingGallery}
                        style={{ display: 'none' }}
                    />

                </label>
                <div className="d-flex gap-2 flex-wrap">

                    {
                        articaleInfo?.galleryimg?.map((img, index) => {
                            console.log(img.url)

                            return (
                                <div key={index} className="galleryImgBox position-relative" key={img.id}>
                                    <button
                                        className="removeButtonGallery"
                                        type="button"
                                        onClick={() => {
                                            // remove from galleryIds
                                            setGalleryIds(prev =>
                                                prev.filter(g => g.target_id !== img.id)
                                            )

                                            // remove from gallery images
                                            setArticaleInfo(prev => ({
                                                ...prev,
                                                galleryimg: prev.galleryimg.filter(g => g.id !== img.id)
                                            }))
                                        }}
                                    >
                                        X
                                    </button>

                                    <img
                                        className="galleryImgs"
                                        src={img.url}
                                        alt="gallery"
                                    />
                                </div>
                            )
                        })
                    }

                </div>
                <div className=" createArticaleSwiperBox">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                    >
                        {
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
                                                setArticaleInfo({
                                                    ...articaleInfo,
                                                    cat: e.id
                                                })
                                            }}
                                            style={articaleInfo.cat == e.id || articaleInfo.cat == null ? { opacity: 1 } : { opacity: 0.7 }}                                        >
                                            {e.name}
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="d-flex flex-column gap-2">
                    {
                        tags.map((tag, index) => (
                            <label
                                htmlFor=""
                                className='d-flex gap-2'
                                key={index}
                            >
                                <input
                                    className='createCheake'
                                    type="checkbox"
                                    value={tag.id}
                                    onChange={(e) =>
                                        e.target.checked ?
                                            setGalleryIds({
                                                ...articaleInfo,
                                                tags: [...articaleInfo.tags, { "target_id": e.target.value }]
                                            })
                                            :
                                            setArticaleInfo({
                                                ...articaleInfo,
                                                tags: articaleInfo.tags.filter(
                                                    tag => tag.target_id !== e.target.value
                                                )
                                            })

                                    }
                                />
                                {tag.name}

                            </label>
                        ))

                    }

                </div>
                <button
                    className='mainBtn textWhite'
                    style={!isLoading.gallery && !isLoading.mainImg && isReady ? { opacity: 1 } : { opacity: 0.4 }}
                    disabled={isLoading.gallery && isLoading.mainImg && !isReady}
                    type='submit'
                >
                    submit
                </button>
            </form>
        </>
    )
}

export default CreateForm