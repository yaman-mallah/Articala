import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import LatestArticles from '../../JsonApi/latestArticles.json'
import { LoginContext } from '../../context/loginContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import LatestArticlesCard from './latestArticlesCard'

const LatestArticlesSection = () => {
    let [containerWidth, setContainerWidth] = useState()
    let [windowWidth, setWindowWidth] = useState()
    let ref = useRef()

    useEffect(() => {
        let getwidth = () => {
            setWindowWidth(window.innerWidth)
            if (ref.current.offsetWidth)
                setContainerWidth(ref.current.offsetWidth)
            // console.log(containerWidth)
        }
        getwidth()
        window.addEventListener('resize', getwidth)
        return () => window.removeEventListener('resize', getwidth)
    }, [])
    // useEffect(() => {
    //     console.log("Container width:", containerWidth);
    // }, [containerWidth]);

    // let {}


    return (
        <>
            <div className="latestArticlesBox position-relative">
                <div className="latestTitleBox"
                    style={{ paddingInlineStart: (windowWidth - containerWidth) / 2 }}
                >
                    <h2 className='DisplayMid'>
                        Latest Articles
                    </h2>
                </div>
                <Container ref={ref}>
                    <div className="w-100 ">

                        <Swiper
                        spaceBetween={30}
                        breakpoints={{
                            0:{
                                slidesPerView:1
                            },
                            992:{
                                slidesPerView:3
                            },
                            1200:{
                                slidesPerView:3
                            }
                        }}
                        >
                            {
                                LatestArticles.cards.map((e) => (
                                    <SwiperSlide>
                                        <LatestArticlesCard title={e.courseTitle } cat={e.category} author={e.author} img={e.image}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </Container>
                <div href="" className='titleLargMid textBlack absButtonBox'
                    style={{
                        paddingInlineEnd: ((windowWidth - containerWidth) / 2) > 40 ? ((windowWidth - containerWidth) / 2) - 40 : ((windowWidth - containerWidth) / 2) + 20
                        , insetInlineEnd: 0
                    }
                    }

                >
                    <a href="" className='secondaryBtn textBlack'>

                        View More
                    </a>
                </div>
            </div>
        </>
    )
}

export default LatestArticlesSection