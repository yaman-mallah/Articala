import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { blogServices } from '../../services/blogServices'
import { CRUDServices } from '../../services/CRUDServices'

const CreateForm = () => {
    let [allCats, setAllCats] = useState([])
    let [isReady, setIsReady] = useState(false)
    let [articaleInfo, setArticaleInfo] = useState({})
    let [token, setToken] = useState('')
    useEffect(() => {
        blogServices.getCats()
            .then((data) => {
                setAllCats(data)
            })
            .catch((err) => console.error(err))
            .finally(() => { })
    }, [])
    useEffect(() => {
        let localtoken = JSON.parse(localStorage.getItem('userData'))
        localtoken &&
            setToken(localtoken.token)
    }, [])
    useEffect(() =>
        console.log(articaleInfo)
        , [articaleInfo])

    let sendApi = () => {
        CRUDServices.createAritcale(token, articaleInfo)
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.error(err))
            .finally(() => console.log('fetch is done'))
    }

    return (
        <>
            <form action=""
                className='d-flex flex-column gap-3 py-4'
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
                    />
                </label>
                <label
                    htmlFor=""
                    className='d-flex flex-column gap-2'
                >
                    <h5>upload gallery imgs</h5>
                    <input
                        type="file"
                        accept="image/*"
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
                                            style={articaleInfo.cat == e.id || articaleInfo.cat==null ? { opacity: 1 } : { opacity: 0.7 }}                                        >
                                            {e.name}
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <button
                    className='mainBtn textWhite'
                    style={isReady ? { opacity: 1 } : { opacity: 0.8 }}
                    disabled={!isReady}
                    type='submit'
                    onClick={() => sendApi()}
                >
                    submit
                </button>
            </form>
        </>
    )
}

export default CreateForm