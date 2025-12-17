import React, { useEffect, useState } from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'

import { blogServices } from '../services/blogServices'
import MyArticaleCard from './myArticalesComponent/MyArticaleCard'
import { Col, Container, Row } from 'react-bootstrap'
import ExploreCard from '../allArticales/exploreComponent/ExploreCard'

const MyArticalesPage = () => {
    let [articaleCardInfo, setArticaleCardInfo] = useState([])

    useEffect(() => {
        blogServices.getMyArticales()
            .then((data) => {
                setArticaleCardInfo(data.rows)
                console.log(data)
            })
            .catch((err) => console.error(err))
            .finally(() => console.log('fetch is done'))
    }, [])

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container>
                    <Row>

                        {
                            articaleCardInfo.map(e => (
                                <Col xl={3} lg={4}>
                                    <ExploreCard info={e}/>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default MyArticalesPage