import React, { useEffect, useState } from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'

import { blogServices } from '../services/blogServices'

import { Col, Container, Row } from 'react-bootstrap'
import ExploreCard from '../allArticales/exploreComponent/ExploreCard'

const MyArticalesPage = () => {
    let [articaleCardInfo, setArticaleCardInfo] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('userData'))
        // console.log(userData)
        if (userData)
            blogServices.getMyArticales(userData.auth)
                .then((data) => {
                    setArticaleCardInfo(data.rows)
                    // console.log(data)
                })
                .catch((err) => console.error(err))
                .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main >
                <div className="pt-5">

                    {isLoading ?
                        <Container>
                            <div className="galleryLoadingScreen d-flex justify-content-center align-items-center">
                                <div className="loadingCircle purpleBorder"></div>
                            </div>
                        </Container>


                        :
                        <Container>
                            <Row className='h-100'>

                                {
                                    articaleCardInfo.length > 0 ?
                                        articaleCardInfo.map((e,index) => (
                                            <Col xl={3} lg={4} key={index}>
                                                <ExploreCard info={e} isMyArticale={true} index={index} />
                                            </Col>
                                        )) :

                                        <div className="h-100 w-100 d-flex justify-content-cetner align-itmes-center">
                                            <p>you did not add any articales yes</p>
                                        </div>


                                }
                            </Row>
                        </Container>
                    }
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default MyArticalesPage