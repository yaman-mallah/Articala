import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import MainBtn from '../../generalComponent/buttonsComponent/MainBtn'

const ContactHero = () => {
    return (
        <>
            <div className="w-100 contactHero">
                <Swiper>
                    <SwiperSlide>
                        <div className="slide1Box">

                            <Container>
                                <div className="d-flex flex-column py-5 gap-4">
                                    <h1 className='textWhite'>
                                        Get In touch
                                    </h1>
                                    <p className='headlineMid textWhite'>
                                        want to get in touch ? we’d love to hear from you heres how you can reach us .
                                    </p>
                                    <button className='d-flex align-items-center gap-3 mainBtn textWhite w-fit'>
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.125 5.03125L11.5 12.9375L2.875 5.03125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2.875 5.03125H20.125V17.25C20.125 17.4406 20.0493 17.6234 19.9145 17.7582C19.7797 17.893 19.5969 17.9688 19.4062 17.9688H3.59375C3.40313 17.9688 3.22031 17.893 3.08552 17.7582C2.95073 17.6234 2.875 17.4406 2.875 17.25V5.03125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.93187 11.5L3.09668 17.7656" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.9037 17.7657L13.0684 11.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        copy Email
                                    </button>
                                </div>
                            </Container>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default ContactHero