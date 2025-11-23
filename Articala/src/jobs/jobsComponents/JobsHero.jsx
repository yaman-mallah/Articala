import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import MainSlide from './heroSwiperSlides/MainSlide'
import JoinSection from './JoinSection'

const JobsHero = () => {
  return (
   <>
    <Container>
        <Swiper>
            <SwiperSlide>
                <MainSlide/>
            </SwiperSlide>
        </Swiper>
       
    </Container>
   </>
  )
}

export default JobsHero