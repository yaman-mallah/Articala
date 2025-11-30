import React, { useContext } from 'react'
import LoginNavBar from './loginComponents/LoginNavBar'
import './loginStyle.css'
import { Col, Container, Row } from 'react-bootstrap'

import mainImg from '.././assets/home/Group 1000006183.png'
import LoginForm from './loginComponents/loginForm'
import { Navigate } from 'react-router'
import { LoginContext } from '../context/loginContext'
const LoginPage = () => {

    const { isLogedIn } = useContext(LoginContext)


    if (isLogedIn) {
        return <Navigate to="/" replace />;
    }


    else
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
                                    <div className="loginImgBox">
                                        <img src={mainImg} alt="" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="d-flex align-items-center h-100">

                                        <LoginForm />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </main>
            </>
        )
}

export default LoginPage