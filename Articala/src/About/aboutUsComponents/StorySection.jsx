import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ourStoryImg from '../../assets/aboutUs/Rectangle 34624702.png'
import ourStoryImg2 from '../../assets/aboutUs/Rectangle 34624703.png'
import ourStoryImg3 from '../../assets/aboutUs/Rectangle 34624704.png'
import ourStoryImg4 from '../../assets/aboutUs/Rectangle 34624705.png'


const StorySection = () => {
    let [isMouseOut, setIsMouseOut] = useState(true);
    let expandingBall = useRef(null);

    useEffect(() => {
        const element = expandingBall.current;
        if (!element) return;

        const handleEnter = () => {
            setIsMouseOut(false);
            console.log(isMouseOut)
        };
        const handleLeave = () => {
            setIsMouseOut(true);
        };

        element.addEventListener("mouseout", handleLeave);
        element.addEventListener("mouseenter", handleEnter);

        return () => {
            element.removeEventListener("mouseout", handleLeave);
            element.removeEventListener("mouseenter", handleEnter);
        };
    }, []);
    useEffect(() => {
        console.log(isMouseOut)
    }, [isMouseOut])


    return (
        <>
            <div className="storyBox ">

                <Container>
                    <Row>
                        <Col xl={6}>
                            <div className="d-flex flex-wrap justify-content-center position-relative">
                                <Row>
                                    <Col>

                                        <img src={ourStoryImg2} alt="" />
                                        <img src={ourStoryImg} alt="" />
                                    </Col>
                                    <Col>

                                        <img src={ourStoryImg3} alt="" />
                                        <img src={ourStoryImg4} alt="" />
                                    </Col>
                                </Row>
                                <div className="d-flex align-items-center justify-content-center expandingBallBox">

                                    <div className={isMouseOut ? "expandingBall d-flex flex-column justify-content-center align-items-center gap-3 small" : "expandingBall  d-flex flex-column gap-3"}
                                    // style={{ background: isMouseOut ? "red" : "green" }}

                                    >
                                        <p className={isMouseOut ? 'DisplayMid textWhite' : 'disaper'}>15 </p>
                                        <>
                                            <p className={isMouseOut ? 'd-flex justify-content-between align-items-center disaper DisplayMid' : 'd-flex DisplayMid textWhite'}

                                            >We’ve been here <br /> almost 15 years</p>

                                            <a href="" className={isMouseOut ? 'd-flex justify-content-between align-items-center disaper' : 'd-flex justify-content-between align-items-center position-relative'}>
                                                Join Our Team
                                                <svg width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M28.0596 8.95155L29.5476 7.43495L37.8158 15.5369C37.9491 15.6667 38.0554 15.8216 38.1286 15.9926C38.2017 16.1637 38.2404 16.3475 38.2422 16.5335C38.2441 16.7196 38.2091 16.9041 38.1394 17.0766C38.0696 17.2491 37.9665 17.4061 37.8358 17.5385L29.7311 25.8082L28.2145 24.3216L35.8214 16.5598L28.0596 8.95155Z" fill="#B4AD8D" />
                                                    <path d="M17.5859 9.0564L19.074 7.5398L27.3422 15.6417C27.4755 15.7715 27.5817 15.9264 27.6549 16.0975C27.7281 16.2685 27.7667 16.4524 27.7686 16.6384C27.7705 16.8244 27.7355 17.009 27.6658 17.1815C27.596 17.354 27.4928 17.5109 27.3622 17.6434L19.2574 25.9131L17.7408 24.4265L25.3477 16.6647L17.5859 9.0564Z" fill="#A1A1A1" />
                                                    <path d="M7.58595 9.15601L9.07396 7.63941L17.3422 15.7413C17.4755 15.8712 17.5817 16.026 17.6549 16.1971C17.7281 16.3681 17.7667 16.552 17.7686 16.738C17.7705 16.924 17.7355 17.1086 17.6658 17.2811C17.596 17.4536 17.4928 17.6105 17.3622 17.743L9.25743 26.0127L7.74085 24.5261L15.3477 16.7643L7.58595 9.15601Z" fill="#EBEBEB" />
                                                </svg>

                                            </a>
                                        </>

                                        <a href='/'
                                            ref={expandingBall}
                                            className="ballLayer"></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex flex-column justify-content-between  storyEnd gap-4">
                                <h2 className='DisplayMid'>We’ve been here almost 15 years</h2>
                                <p className='headlineMid textGray700'>
                                    Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.
                                </p>
                                <div className="d-flex flex-column flex-sm-row align-items-center gap-5 justify-content-between">
                                    <div className="d-flex align-items-start justify-content-end gap-2 ">
                                        <div className="order-2 order-sm-1">

                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2" d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" fill="#FD8E1F" />
                                                <path d="M5 27.5L20 36.25L35 27.5" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M5 20L20 28.75L35 20" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="d-flex flex-column order-1 align-items-center align-items-md-start">
                                            <p className='headlineLargmid'>57</p>
                                            <p className='BodyMedium400 textGray700'>Trusted Companies</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start justify-content-end ">
                                        <div className="order-2 order-sm-1">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2" d="M8.50951 31.4905C7.07139 30.0524 8.02524 27.0331 7.29325 25.2639C6.53443 23.43 3.75 21.9539 3.75 19.9999C3.75 18.046 6.53445 16.57 7.29325 14.7361C8.02525 12.9669 7.07139 9.94764 8.50951 8.50951C9.94764 7.07139 12.9669 8.02524 14.7361 7.29325C16.5701 6.53443 18.0461 3.75 20.0001 3.75C21.954 3.75 23.43 6.53445 25.2639 7.29325C27.0331 8.02525 30.0524 7.07139 31.4905 8.50951C32.9286 9.94764 31.9748 12.9669 32.7068 14.7361C33.4656 16.5701 36.25 18.0461 36.25 20.0001C36.25 21.954 33.4656 23.43 32.7067 25.2639C31.9747 27.0331 32.9286 30.0524 31.4905 31.4905C30.0524 32.9286 27.0331 31.9748 25.2639 32.7068C23.43 33.4656 21.9539 36.25 19.9999 36.25C18.046 36.25 16.57 33.4656 14.7361 32.7067C12.9669 31.9747 9.94764 32.9286 8.50951 31.4905Z" fill="#23BD33" />
                                                <path d="M8.50951 31.4905C7.07139 30.0524 8.02524 27.0331 7.29325 25.2639C6.53443 23.43 3.75 21.9539 3.75 19.9999C3.75 18.046 6.53445 16.57 7.29325 14.7361C8.02525 12.9669 7.07139 9.94764 8.50951 8.50951C9.94764 7.07139 12.9669 8.02524 14.7361 7.29325C16.57 6.53443 18.0461 3.75 20.0001 3.75C21.954 3.75 23.43 6.53445 25.2639 7.29325C27.0331 8.02525 30.0524 7.07139 31.4905 8.50951C32.9286 9.94764 31.9748 12.9669 32.7068 14.7361C33.4656 16.57 36.25 18.0461 36.25 20.0001C36.25 21.954 33.4656 23.43 32.7067 25.2639C31.9747 27.0331 32.9286 30.0524 31.4905 31.4905C30.0524 32.9286 27.0331 31.9748 25.2639 32.7068C23.43 33.4656 21.9539 36.25 19.9999 36.25C18.046 36.25 16.57 33.4656 14.7361 32.7067C12.9669 31.9747 9.94764 32.9286 8.50951 31.4905Z" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M26.875 16.25L17.7083 25L13.125 20.625" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <div className="d-flex flex-column order-1 align-items-center align-items-md-start">
                                            <p className='headlineLargmid'>99.9%</p>
                                            <p className='BodyMedium400 textGray700'>Success Rate</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start justify-content-end ">
                                        <div className="order-2 order-sm-1">

                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2" d="M12.5 33.75H7.5C7.16848 33.75 6.85054 33.6183 6.61612 33.3839C6.3817 33.1495 6.25 32.8315 6.25 32.5V7.5C6.25 7.16848 6.3817 6.85054 6.61612 6.61612C6.85054 6.3817 7.16848 6.25 7.5 6.25H12.5V33.75Z" fill="#564FFD" />
                                                <path d="M17.5 17.5H27.5" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M17.5 22.5H27.5" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M32.5 6.25H7.5C6.80964 6.25 6.25 6.80964 6.25 7.5V32.5C6.25 33.1904 6.80964 33.75 7.5 33.75H32.5C33.1904 33.75 33.75 33.1904 33.75 32.5V7.5C33.75 6.80964 33.1904 6.25 32.5 6.25Z" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.5 6.25V33.75" stroke="#564FFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <div className="d-flex flex-column order-1 align-items-center align-items-md-start">
                                            <p className='headlineLargmid'>26k</p>
                                            <p className='BodyMedium400 textGray700'>Trusted Companies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default StorySection