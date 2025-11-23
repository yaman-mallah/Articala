import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Map from '../../generalComponent/Map'
import EmailForm from '../../generalComponent/EmailForm'

const ContactUsSection = () => {
    return (
        <>
            <Container className='py-5'>
                <Row>
                    <Col lg={5}>

                        <div className="d-flex flex-column">
                            <h2>Contact Us</h2>
                            <p>
                                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                            </p>
                            <div className="formBox">
                                <EmailForm/>
                            </div>
                        </div>

                        
                    </Col>
                    <Col lg={7}>
                        <Map/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactUsSection