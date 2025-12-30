import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

import man from '../../assets/aboutUs/men.png'
import woman from '../../assets/aboutUs/women.png'


const AboutUsHero = () => {
    let [paddingStatr, setPaddingStart] = useState(0)
    let currentContainerWidth = useRef()
    useEffect(() => {
        let calculating = () => {
            setPaddingStart((window.innerWidth - currentContainerWidth.current?.offsetWidth) / 2)
            // console.log(paddingStatr)
        }
        calculating()
        window.addEventListener('resize', calculating)
        return () => {
            window.removeEventListener('resize', calculating);
        };
    }, [currentContainerWidth])
    return (
        <div className='w-100 py-5'>
            <Swiper>
                <SwiperSlide>
                    <Row>
                        <Col lg={6} className='mb-5 order-2 order-lg-1 '>

                            <div
                                className="d-flex flex-column h-100 justify-content-center pt-5 pt-md-auto"
                                style={{ paddingInlineStart: paddingStatr + 20, paddingInlineEnd: '50px' }}
                            >
                                <h2 className='display01 textGray100'
                                    data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-duration="800"
                                    data-aos-once="true"  // ← Force repeat on every appearance
                                    data-aos-mirror="true"
                                >2011-2025</h2>
                                <h1>We share knowledge with the world</h1>

                                <p className='textGray700 BodyXXXL400'>
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.
                                </p>
                            </div>

                        </Col>
                        <Col className='order-1 order-lg-2 '>
                            {/* <img src={heroImg} alt=""  className=' h-100 aboutUsImg'/> */}
                            <div className="d-flex h-100 align-items-end gradiantBox justify-content-center  ">
                                <img className='d-none d-xl-flex' src={man} alt="" />
                                <img src={woman} alt="" />
                            </div>

                        </Col>
                    </Row>
                </SwiperSlide>
            </Swiper>

            <Container ref={currentContainerWidth} ></Container>
        </div>
    )
}

export default AboutUsHero