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
import { Autoplay } from 'swiper/modules';

const HeroSection = () => {
    return (
        <>
            <Container>
                <div className="w-100 heroBox">

                    <Swiper
                        spaceBetween={30}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <MainSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MainSlide />
                        </SwiperSlide>



                    </Swiper>
                </div>
            </Container>
        </>
    )
}

export default HeroSection