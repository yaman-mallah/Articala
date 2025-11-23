import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import JobCard from '../../generalComponent/JobCard'


//should be moved to an api 
import job1 from '../../assets/home/job/fc83eff6ccb6c834e2fe3dcb2a6175a92092ce8f.png'
import job2 from '../../assets/home/job/Course Images.png'
import job3 from '../../assets/home/job/Course Images-1.png'

const JobOpprtunitiesSection = ({NoMore}) => {
  let [containerWidth, setContainerWidth] = useState()
  let [windowWidth, setWindowWidth] = useState()
  let ref = useRef()
  useEffect(() => {
    let getwidth = () => {
      setWindowWidth(window.innerWidth)
      if (ref.current.offsetWidth)
        setContainerWidth(ref.current.offsetWidth)
      // console.log(containerWidth)
    }
    getwidth()
    window.addEventListener('resize', getwidth)
    return () => window.removeEventListener('resize', getwidth)
  }, [])
  return (
    <>
      <div className="jobBox position-relative">
        <div className="jobTitleBox"
          style={{ paddingInlineEnd: (windowWidth - containerWidth) / 2 }}
        >
          <h2 className='DisplayMid '>
            Our Job Opprtunities
          </h2>
        </div>
        <Container ref={ref}>
          <div className="w-100">

            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1400: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },

              }}
            >
              <SwiperSlide>
                <Row>
                  <Col md={12}>
                    <JobCard
                      img={job3}
                      salary={400}
                      title={'web developer'}
                      experiance={1}
                      isPartTime={false}
                      status={'Featured'}
                    />
                  </Col>
                  <Col md={12}>
                    <JobCard
                      img={job2}
                      salary={300}
                      title={'System Analysis'}
                      experiance={2}
                      isPartTime={true}
                      status={'Featured'}
                    />
                  </Col>
                </Row>
              </SwiperSlide>
              <SwiperSlide>
                <Row>
                  <Col md={12}>
                    <JobCard
                      img={job2}
                      salary={200}
                      title={'data base'}
                      experiance={2}
                      isPartTime={false}
                      isSinor={true}
                      status={'Featured'}
                    />
                  </Col>
                  <Col md={12}>
                    <JobCard
                      img={job3}
                      salary={190}
                      title={'ui / ux'}
                      experiance={2}
                      isPartTime={true}
                      status={'limited'}
                    />
                  </Col>
                </Row>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
        <div href="" className='titleLargMid textBlack absButtonBox'
          style={{ paddingInlineStart: ((windowWidth - containerWidth) / 2) > 40 ? ((windowWidth - containerWidth) / 2) - 40 : ((windowWidth - containerWidth) / 2) + 20 ,
           insetInlineStart:0
           }}

        >{
          !NoMore&&
          <a href="" className='secondaryBtn textBlack'>

            View More
          </a>
        }
        </div>
      </div>
    </>
  )
}

export default JobOpprtunitiesSection