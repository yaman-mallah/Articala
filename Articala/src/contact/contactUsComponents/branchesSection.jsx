import React from 'react'
import { Container } from 'react-bootstrap'
import ArrowLink from '../../generalComponent/ArrowLink'
import { } from 'swiper/types'
import { SwiperSlide, Swiper } from 'swiper/react'

import img1 from '../../assets/contactUs/Rectangle 9803-1.png'
import img2 from '../../assets/contactUs/Rectangle 9803-2.png'
import img3 from '../../assets/contactUs/Rectangle 9803.png'
import BranchCard from '../../generalComponent/BranchCard'

const BranchesSection = () => {
    return (
        <>
            <div className="py-5">

                <Container>
                    <div className="d-flex justify-content-between w-100">
                        <div className="d-flex gap-2 align-items-center">
                            <ArrowLink text={'Brows All'} />
                            <p className='titleLargMid'>
                                We have more Branches to check out.
                            </p>
                        </div>
                        <h2>
                            Browse Our Branches
                        </h2>
                    </div>
                    <div className='py-4'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                        >
                            <SwiperSlide>
                                <BranchCard place={'Dubai, UAE'} img={img2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <BranchCard place={'Damascus, Syria'} img={img1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <BranchCard place={'Istanbul, Turkey'} img={img3} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default BranchesSection