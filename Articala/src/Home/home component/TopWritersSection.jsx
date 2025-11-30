import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ArrowLink from '../../generalComponent/ArrowLink'

import { blogServices } from '../../services/blogServices';

import { Swiper, SwiperSlide } from 'swiper/react';

import topWriter from '../../JsonApi/topWriters.json'
import TopWriterCard from './topWriterCard';

const TopWritersSection = () => {
    let [topWriterList, setTopWriterList] = useState([])
    useEffect(() => {
        blogServices.getUserList()
            .then(data => setTopWriterList(data))
    }, [])
    useEffect(() => console.log(topWriterList), [topWriterList])
    return (
        <>
            <div className="py-5">

                <Container>
                    <div className="d-flex flex-column gap-3 w-100 py-5">
                        <div className="d-flex flex-column flex-xl-row justify-content-between align-items-start">
                            <h2 className='DisplayMid'>
                                Check out our Top Writers
                            </h2>
                            <div className="d-flex align-items-center flex-wrap justify-content-end gap-2">

                                <p className='titleLargMid'>
                                    Thousands of users waiting for a Articles. Start writing & earning now!.
                                </p>
                                <ArrowLink text={'Browse All'} end={true} />
                            </div>
                        </div>
                        <div className="w-100">

                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                breakpoints={{
                                    0:{
                                        slidesPerView:1
                                    },
                                    992:{
                                        slidesPerView:2
                                    },
                                    1200:{
                                        slidesPerView:3
                                    },
                                }}
                            >
                                {
                                    topWriter.cards.map((e) =>
                                        <SwiperSlide>
                                            <TopWriterCard height={'100%'} img={e.image} name={e.author} rating={e.rating} articlesNumber={e.articles} title={e.courseTitle} />
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TopWritersSection