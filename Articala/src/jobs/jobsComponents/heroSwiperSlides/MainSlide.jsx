import React from 'react'
import { Col, Row } from 'react-bootstrap'
import mainImg from '../../../assets/jobs/Group 1000006213.png'

const MainSlide = () => {
    return (
        <>
            <Row>
                <Col lg={6} className='order-2 order-xl-1'>
                    <div className="d-flex flex-column justify-content-center h-100 gap-3 py-5">
                        <h1 className='DisplayMid'>Join the most incredible & creative team.</h1>
                        <p className='textGray500 headlineMid'>
                            Proin gravida enim augue, dapibus ultrices eros feugiat et. Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac. Mauris gravida justo ac nunc consectetur.
                        </p>
                        <a href="" className= 'd-flex justify-content-between align-items-center doubleArrowLink'>
                            Join Our Team
                            <svg width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.0596 8.95155L29.5476 7.43495L37.8158 15.5369C37.9491 15.6667 38.0554 15.8216 38.1286 15.9926C38.2017 16.1637 38.2404 16.3475 38.2422 16.5335C38.2441 16.7196 38.2091 16.9041 38.1394 17.0766C38.0696 17.2491 37.9665 17.4061 37.8358 17.5385L29.7311 25.8082L28.2145 24.3216L35.8214 16.5598L28.0596 8.95155Z" fill="#B4AD8D" />
                                <path d="M17.5859 9.0564L19.074 7.5398L27.3422 15.6417C27.4755 15.7715 27.5817 15.9264 27.6549 16.0975C27.7281 16.2685 27.7667 16.4524 27.7686 16.6384C27.7705 16.8244 27.7355 17.009 27.6658 17.1815C27.596 17.354 27.4928 17.5109 27.3622 17.6434L19.2574 25.9131L17.7408 24.4265L25.3477 16.6647L17.5859 9.0564Z" fill="#A1A1A1" />
                                <path d="M7.58595 9.15601L9.07396 7.63941L17.3422 15.7413C17.4755 15.8712 17.5817 16.026 17.6549 16.1971C17.7281 16.3681 17.7667 16.552 17.7686 16.738C17.7705 16.924 17.7355 17.1086 17.6658 17.2811C17.596 17.4536 17.4928 17.6105 17.3622 17.743L9.25743 26.0127L7.74085 24.5261L15.3477 16.7643L7.58595 9.15601Z" fill="#EBEBEB" />
                            </svg>

                        </a>
                    </div>
                </Col>
                <Col lg={6} className='order-1 order-xl-2'>
                <div className="d-flex justify-content-center w-100 py-5">

                    <img src={mainImg} alt="" />
                </div>
                </Col>
            </Row>
        </>
    )
}

export default MainSlide