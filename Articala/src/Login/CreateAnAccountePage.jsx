import React, { useEffect } from 'react'
import LoginNavBar from './loginComponents/LoginNavBar'
import mainImg from '.././assets/home/Group 1000006183.png'
import { Col, Container, Row } from 'react-bootstrap'
import './loginStyle.css'
import CreateAccounteForm from './loginComponents/CreateAccounteForm'
import { useNavigate } from 'react-router'

const CreateAnAccountePage = () => {
    let navigate=useNavigate()
    useEffect(()=>{
        let data =localStorage.getItem('userData')
        if(data){
            navigate('/login')
        }
    })
    return (
        <>
            <header>
                <LoginNavBar />
            </header>
            <main>
                <div className="loginBox">

                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className="loginImgBox ">
                                    <img src={mainImg} alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="d-flex align-items-center h-100">
                                    <CreateAccounteForm/>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>

        </>
    )
}

export default CreateAnAccountePage