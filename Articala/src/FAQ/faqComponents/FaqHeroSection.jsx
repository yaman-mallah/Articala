import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { blogServices } from '../../services/blogServices'
import FaqAccordion from './FaqAccordion'
const FaqHeroSection = () => {
    let [questionsCats, setQuestionsCats] = useState([])
    let [faqData, setFaqData] = useState([])

    let [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        blogServices.getFaq()
            .then((data) => {
                setFaqData(data)
                const cats = [];

                data.forEach(item => {
                    if (!cats.some(e => e.cat === item.category)) {
                        cats.push({
                            cat: item.category,
                            catId: item.category_id
                        });
                    }
                });

                setQuestionsCats(cats);
                setIsLoading(false)
            })
            .catch((err) => console.error(err))
            .finally(() => console.log('fetch is done'))
    }, [])
    let [show, setShow] = useState(11)

    useEffect(() => {
        console.log(show)
    }, [show])
    if (isLoading)
        return (
            <div className="faqHeroBox d-flex justify-content-center align-items-center">

                <div className="loadingCirclePurple"></div>
            </div>
        )
        
    return (
        <>
            <div className="pt-4">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="p-lg-3 mb-4 p-0 verticalTabsBox ">
                                <div className="verticalTabsInnerBox d-flex flex-column">
                                    {
                                        questionsCats.map((e, index) =>
                                            <button
                                                className={show==e.catId?'catTitleBtn currentBtn':'catTitleBtn'}
                                                key={index}
                                                onClick={() => {
                                                    setShow(e.catId)
                                                }}
                                            >
                                                <p className='headlineSmall'>

                                                    {e.cat}
                                                </p>
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex flex-column gap-3">
                                <h2 className='DisplayMid'>FAQs</h2>
                                <div>
                                    <FaqAccordion faqData={faqData} catID={show} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default FaqHeroSection