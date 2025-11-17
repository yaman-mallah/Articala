import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

import heroImg from '../../assets/aboutUs/image 4.png'


const TitleLargRegular = () => {
    let [paddingStatr, setPaddingStart] = useState(0)
    let currentContainerWidth = useRef()
    useEffect(() => {
        let calculating = () => {
            setPaddingStart((window.innerWidth - currentContainerWidth.current?.offsetWidth) / 2)
            console.log(paddingStatr)
        }
        calculating()
        window.addEventListener('resize', calculating)
        return () => {
            window.removeEventListener('resize', calculating);
        };
    }, [currentContainerWidth])
    return (
        <div className='w-100'>
            <Swiper>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}>

                            <div
                                className="d-flex flex-column h-100 justify-content-center gap-3"
                                style={{ paddingInlineStart: paddingStatr ,paddingInlineEnd:'50px'}}
                            >
                                <h2 className='display01 textGray100'>2011-2025</h2>
                                <h1>We share knowledge with the world</h1>
                                    <div className="line"></div>
                                <p className='textGray700 BodyXXXL400'>
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.
                                </p>
                            </div>

                        </Col>
                        <Col>
                            <img src={heroImg} alt=""  className='w-100 '/>
                        </Col>
                    </Row>
                </SwiperSlide>
            </Swiper>

            <Container ref={currentContainerWidth} ></Container>
        </div>
    )
}

export default TitleLargRegular