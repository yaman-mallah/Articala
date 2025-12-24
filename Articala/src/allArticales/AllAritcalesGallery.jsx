import React, { useContext, useEffect, useRef, useState } from 'react'
import { blogServices } from '../services/blogServices'
import { Col, Row } from 'react-bootstrap'
import ExploreCard from './exploreComponent/ExploreCard'
import { FilterContext } from '../context/filterContext'

const AllAritcalesGallery = (search) => {
    let [articalesCard, setArticalesCard] = useState([])
    let { globalCurrentCat, globalCurrentTage } = useContext(FilterContext)
    let [isLoading, setIsLoading] = useState(true)
    let [navigationInfo, setNavigationInfo] = useState({})
    let [currentPage, setCurrentPage] = useState(0)


    let getApi = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setIsLoading(true)
        // console.log(currentPage)
        blogServices.getAllArticales({
            category: globalCurrentCat,
            currentPage: currentPage,
            currentTag:globalCurrentTage,
            search:search
        })
            .then(data => {
                setArticalesCard(data.rows)
                setNavigationInfo(data.pager)

                // console.log(data)
                // console.log(data.rows)
            })
            .catch((err) => console.error(err))
            .finally(() => {
                console.log('fetch is done')
                setIsLoading(false)
            })
    }
    useEffect(() => {
        setCurrentPage(0)
        getApi()
    }, [globalCurrentCat]);
    useEffect(() => {
        setCurrentPage(0)
        getApi()
    }, [globalCurrentTage])
    useEffect(() => {
        getApi()
    }, [currentPage]);
    // useEffect(()=>setCurrentPage(0),[globalCurrentCat])
    useEffect(()=>{
        getApi()
    },[search])





    if (isLoading)
        return (
            <div className="galleryLoadingScreen d-flex justify-content-center align-items-center">
                <div className="loadingCircle purpleBorder"></div>
            </div>
        )

    return (
        <Row className='mt-4' >
            <div ></div>
            {
                articalesCard.map((e, index) => (
                    <Col xl={4} lg={6} key={index}>
                        <ExploreCard info={e} />
                    </Col>
                )
                )
            }
            <Col xs={12}>
                <div className="d-flex justify-content-center py-3">
                    <div className="pagesBox w-100 d-flex justify-content-between align-items-center">
                        <button
                            className='mainBtn textWhite'
                            onClick={() => {
                                setCurrentPage(pre => pre - 1)
                            }
                            }
                            style={currentPage < 1 ? { opacity: 0.75 } : { opacity: 1 }}
                            disabled={currentPage <= 0 ? true : false}
                        >
                            prev
                        </button>
                        {
                            (navigationInfo.current_page + 1) + ' / ' + (navigationInfo.total_pages)
                        }
                        <button
                            className='mainBtn textWhite'
                            onClick={() => {
                                setCurrentPage(pre => pre + 1)
                            }}
                            style={currentPage == navigationInfo.total_pages - 1 ? { opacity: 0.75 } : { opacity: 1 }}
                            disabled={currentPage == navigationInfo.total_pages - 1 ? true : false}
                        >


                            next

                        </button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default AllAritcalesGallery