import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

import { blogServices } from '../../services/blogServices'

const TestimonialsSection = () => {
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
    useEffect(() => {
        console.log("Container width:", containerWidth);
    }, [containerWidth]);



    let [testimonialsArray, settestimonialsArray] = useState([])
    useEffect(() => {
        blogServices.getTestimoials()
            .then((data) => {
                settestimonialsArray(data)
            })
    }, [])


    let starsCounter = (number) => {
        let Array = []
        for (let i = 0; i < number; i++) {
            Array.push(i)
        }
        return Array
    }


    // Helper function
    const getFirstNWords = (htmlString, wordCount = 17) => {
        // Remove HTML tags
        const text = htmlString.replace(/<[^>]+>/g, "");
        // Split into words and take first N
        const words = text.split(/\s+/).slice(0, wordCount);
        return words.join(" ") + (text.split(/\s+/).length > wordCount ? "..." : "");
    };

    return (
        <>
            <div >
                <div className="testimonialsTitle"
                    style={{ paddingInlineStart: ((windowWidth - containerWidth) / 2) + 20 }}
                >
                    <h2 className='DisplayMid'>
                        Top Testimonials
                    </h2>
                </div>
                <div className="w-100 testimonialsSection">
                    <div className="testimonialsSwiper">

                        <Swiper className='h-100 w-100 d-flex'
                            slidesPerView={3}
                            spaceBetween={10}
                            autoHeight={true}
                            breakpoints={{
                                0: {          // from 0px up
                                    slidesPerView: 1,
                                    spaceBetween: 15,
                                },
                                576: {        // from 576px up
                                    slidesPerView: 1.5,
                                    spaceBetween: 20,
                                },
                                768: {        // from 768px up
                                    slidesPerView: 2,
                                    spaceBetween: 25,
                                },
                                992: {        // from 992px up
                                    slidesPerView: 2.5,
                                    spaceBetween: 30,
                                },
                                1200: {       // from 1200px up
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}

                        >
                            {
                                testimonialsArray.map((e, index) => (

                                    <SwiperSlide key={index} className=' d-flex'>
                                        <div className="d-flex h-100 w-100 flex-column testimonialCard">
                                            <div className="p-5 h-100">

                                                <p className='titleMid'>
                                                    <div className="w-100 d-flex justify-content-start">

                                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M32.746 25.242C35.88 25.242 38 27.426 38 30.662C38 33.574 35.568 36 32.274 36C28.666 36 26 33.088 26 28.64C26 18.53 33.372 14.486 38 14V18.448C34.862 19.014 31.334 22.168 31.176 25.648C31.334 25.568 31.96 25.242 32.746 25.242Z" fill="#FF6636" />
                                                            <path d="M16.746 25.242C19.882 25.242 22 27.426 22 30.662C22 33.574 19.568 36 16.274 36C12.666 36 10 33.088 10 28.64C10 18.53 17.372 14.486 22 14V18.448C18.862 19.014 15.334 22.168 15.176 25.648C15.334 25.568 15.96 25.242 16.746 25.242Z" fill="#FF6636" />
                                                        </svg>
                                                    </div>

                                                    <p>{getFirstNWords(e.body, 17)}</p>
                                                    <div className="w-100 d-flex justify-content-end">

                                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M32.746 25.242C35.88 25.242 38 27.426 38 30.662C38 33.574 35.568 36 32.274 36C28.666 36 26 33.088 26 28.64C26 18.53 33.372 14.486 38 14V18.448C34.862 19.014 31.334 22.168 31.176 25.648C31.334 25.568 31.96 25.242 32.746 25.242Z" fill="#FF6636" />
                                                            <path d="M16.746 25.242C19.882 25.242 22 27.426 22 30.662C22 33.574 19.568 36 16.274 36C12.666 36 10 33.088 10 28.64C10 18.53 17.372 14.486 22 14V18.448C18.862 19.014 15.334 22.168 15.176 25.648C15.334 25.568 15.96 25.242 16.746 25.242Z" fill="#FF6636" />
                                                        </svg>
                                                    </div>

                                                </p>
                                            </div>
                                            <div className="testimonialCardBottom d-flex flex-column justify-content-center  gap-2  align-items-center w-100">
                                                <p className='bodyLarge'>
                                                    {e.full_name}
                                                </p>
                                                <div className="d-flex gap-2">

                                                    {
                                                        starsCounter(e.rating).map((e, index) =>
                                                            <svg key={index} width="20" height="20" viewBox="0 0 411 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M194.914 7.6008C198.207 -2.53362 212.545 -2.53366 215.838 7.60076L256.779 133.606C258.252 138.138 262.475 141.207 267.241 141.207H399.73C410.386 141.207 414.817 154.842 406.196 161.106L299.01 238.981C295.154 241.782 293.541 246.748 295.014 251.28L335.955 377.285C339.248 387.419 327.649 395.847 319.028 389.583L211.842 311.708C207.986 308.907 202.766 308.907 198.91 311.708L91.724 389.583C83.1031 395.847 71.5038 387.419 74.7967 377.285L115.738 251.28C117.211 246.748 115.598 241.782 111.742 238.981L4.5559 161.106C-4.06495 154.843 0.365549 141.207 11.0215 141.207H143.511C148.277 141.207 152.5 138.138 153.973 133.606L194.914 7.6008Z" fill="white" />
                                                            </svg>

                                                        )
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <Container ref={ref}>

                </Container>
            </div >

        </>
    )
}

export default TestimonialsSection