import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArrowLink from '../../generalComponent/ArrowLink'

import { blogServices } from '../../services/blogServices'
import CategoriesCard from '../../generalComponent/CategoriesCard'

const CategoriesSection = () => {
    let [cats, setCats] = useState([])
    useEffect(() => {
        blogServices.getCats()
            .then(data => setCats(data))
            .catch((err)=>console.error(err))
    }, [])
    return (
        <>
            <Container>
                <div className="d-flex flex-column gap-4 py-5">
                    <div className="d-flex flex-column flex-xl-row gap-2 justify-content-between  w-100">
                        <div className="d-flex flex-column flex-md-row gap-2 align-items-md-center align-items-start order-2 order-xl-1">
                            <div className="order-2 order-md-1">
                                <ArrowLink text={'Browse All'} herf={'/explore'}/>
                            </div>
                            <p className='titleLargMid textGray order-md-2'>
                                We have more category & subcategory.
                            </p>
                        </div>
                        <h2 className='DisplayMid order-xl-2'>Browse Our Articles Categories</h2>
                    </div>
                    <Row className='justify-content-center'>
                        {
                            cats.map((e, index) => {
                                {/* console.log(e) */}
                                return (
                                    <Col xl={4} lg={6}>
                                        <CategoriesCard title={e.name} index={index} />
                                    </Col>)
                            })
                        }
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default CategoriesSection