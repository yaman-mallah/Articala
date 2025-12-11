import React, { useEffect, useState } from 'react'
import NavBar from '../../generalComponent/NavBar'
import Footer from '../../generalComponent/Footer'
import ArticaleDisplay from './articalePageComponent/ArticaleDisplay'
import { blogServices } from '../../services/blogServices'
import { useParams } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap'
import { SwiperSlide, Swiper } from 'swiper/react'

const Articale = () => {
    let { id } = useParams()
    let [isLoading, setIsLoading] = useState(true)
    let [articaleInfo, setArticaleInfo] = useState()

    useEffect(() => {
        blogServices.getSinglePage(id)
            .then(data => {
                setArticaleInfo(data)
                console.log(data)
            })
        .finally(() =>setIsLoading(false))
    }, [])
    

    return (
        <>
            <header>
                <NavBar />
            </header>
            {
                isLoading ?
                    <div className="galleryLoadingScreen d-flex justify-content-center align-items-center">
                        <div className="loadingCircle purpleBorder"></div>
                    </div>

                    :
                    <main>
                        <Container>
                            <Row>
                                <Col lg={1} xs={2}>
                                    <div className="position-realtive h-100">

                                        <div className="articaleHeroImgBox"
                                        >
                                            {
                                                articaleInfo?.field_image.map((e, index) => (
                                                    <img
                                                        className='articaleProfileImg'
                                                        key={index}
                                                        src={e.url} alt="main articale image"

                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </Col>
                                <Col>

                                    <ArticaleDisplay info={articaleInfo} />
                                </Col>

                            </Row>
                            <div className="w-100 swiperBox py-4">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1
                                        },
                                        992: {
                                            slidesPerView: 2
                                        },
                                        1200: {
                                            slidesPerView: 3
                                        },
                                    }}
                                >
                                    {
                                        articaleInfo?.field_gallery.map((e, index) => (

                                            <SwiperSlide
                                                key={index}
                                            >
                                                <img src={e.url} alt={e.alt} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </Container>
                    </main>
            }
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Articale