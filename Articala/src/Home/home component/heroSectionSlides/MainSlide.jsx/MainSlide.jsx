import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import MainBtn from '../../../../generalComponent/buttonsComponent/MainBtn'
import SecondaryBtn from '../../../../generalComponent/buttonsComponent/SecondaryBtn'



import heroSlide from '../../../../assets/home/Group 1000006183.png'
import { LoginContext } from '../../../../context/loginContext'
const MainSlide = () => {
    let { isLogedIn } = useContext(LoginContext)
    console.log(isLogedIn)

    return (
        <>
            <Row>
                <Col xl={6} md={12} className='order-2 order-xl-1'>
                    <div className="d-flex flex-column gap-4">
                        <div className="d-flex flex-column">
                            <h1>Articula – Your Gateway to Premium Articles</h1>
                            <div className="w-100 divider"></div>
                        </div>
                        <p className='textGray bodyText'>
                            Discover high-quality articles written by experts and creators in various scientific and technical fields.
                            Join a community of readers and writers and explore exclusive, knowledge-driven content.
                        </p>
                        <div className="d-flex gap-3">
                            {
                                !isLogedIn &&
                                    <SecondaryBtn herf={'/create-an-account'} text={'Create Account'} isFullWidth={true} />
                            }
                            <MainBtn herf={'/explore'} text={'Start Reading'} isFullWidth={true} />
                        </div>
                    </div>
                </Col>
                <Col md={12} xl={6} className='order-1 order-xl-2'>
                    <div className="mainSlideEnd">
                        <img src={heroSlide} alt="" />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default MainSlide