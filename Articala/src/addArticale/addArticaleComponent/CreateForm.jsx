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

    let navigaite=useNavigate()
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
    let { setGlobalToken } = useContext(LoginContext)
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
                console.log(data.uri[0].url)
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
        getToken()
        selectedFiles.map((file, index) => {
            CRUDServices.uploadArticaleGallery(token, file, userData.auth)
                .then(data => {
                    console.log(data)
                    setArticaleInfo({
                        ...articaleInfo,
                        galleryimg: [
                            ...articaleInfo.galleryimg,
                            {
                                id: data.fid[0].value,
                                url: ApiObject.BASE_URL + data.uri[0].url
                            }]
                    })
                    setGalleryIds([
                        ...galleryIds,
                        { 'target_id': data.fid[0].value }
                    ])

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
                if(data.status[0].value==true){ 
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
                    htmlFor=""
                    className='d-flex flex-column gap-2'
                >
                    <h5>upload main img</h5>
                    <input
                        type="file"
                        accept="image/*"
                        // onChange={(e) => {
                        // console.log(e.target.files[0])
                        // setArticaleInfo({
                        //     ...articaleInfo,
                        //     img: e.target.files[0]
                        // })

                        // }}
                        onChange={uploadMainImg}

                    />
                </label>
                <label
                    htmlFor=""
                    className='d-flex flex-column gap-2'
                >
                    <h5>upload gallery images</h5>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={uploadingGallery}
                    />
                </label>
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
                                            setArticaleInfo({
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