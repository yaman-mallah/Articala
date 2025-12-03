import React, { useEffect, useState } from 'react'
import { blogServices } from '../services/blogServices'
import { Col, Row } from 'react-bootstrap'
import ExploreCard from './exploreComponent/ExploreCard'

const AllAritcalesGallery = () => {
    let [articalesCard, setArticalesCard] = useState([])
    useEffect(() => {
        blogServices.getAllArticales()
            .then(data => {
                setArticalesCard(data.rows)
                console.log(data.rows)
            })
            .catch((err)=>console.error(err))
            .finally(()=>{
                console.log('fetch is done')
            })
    }, []);





    return (
        <Row>
           {
            articalesCard.map((e,index)=>(
                <Col lg={4}>
                    <ExploreCard/>
                </Col>
            )
            )
           }
        </Row>
    )
}

export default AllAritcalesGallery