import React from 'react'
import { Container, Row } from 'react-bootstrap'

//swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../../style/homeStyle.css'
import MainSlide from './heroSectionSlides/MainSlide.jsx/MainSlide';
import SecondSlide from './heroSectionSlides/MainSlide.jsx/SecondSlide';


const HeroSection = () => {
    return (
        <>
            <Container>
                <div className="w-100 heroBox">

                    <Swiper


                    >
                        <SwiperSlide>
                            <MainSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SecondSlide/>
                        </SwiperSlide>

     
                    </Swiper>
                </div>
            </Container>
        </>
    )
}

export default HeroSection