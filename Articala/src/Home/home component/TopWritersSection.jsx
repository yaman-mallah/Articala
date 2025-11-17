import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ArrowLink from '../../generalComponent/ArrowLink'

import { blogServices } from '../../services/blogServices';

import { Swiper, SwiperSlide } from 'swiper/react';

const TopWritersSection = () => {
    let [topWriterList, setTopWriterList] = useState([])
    useEffect(() => {
        blogServices.getUserList()
        .then(data=>setTopWriterList(data))
    }, [])
    useEffect(()=>console.log(topWriterList),[topWriterList])
    return (
        <>
            <div className="py-5">

                <Container>
                    <div className="d-flex flex-column w-100">
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
                            >
                                <SwiperSlide>

                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TopWritersSection