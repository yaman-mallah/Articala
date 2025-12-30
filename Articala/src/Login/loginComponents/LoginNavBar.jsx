import React from 'react'
import Logo from '../../generalComponent/Logo'
import { Container } from 'react-bootstrap'
import TransperentBtn from '../../generalComponent/buttonsComponent/TransperentBtn'

const LoginNavBar = ({ isLoggingIn }) => {
    return (
        <>


            <div className="loginHeaderBox">

                <Container>
                    <div className="d-flex justify-content-between align-items-center ">

                        <Logo />


                        <div className="d-flex gap-3  align-items-center  z-3">
                            <a href=""
                            className='d-md-flex d-none'
                            >
                                {
                                    isLoggingIn ?
                                        'create an account'
                                        :
                                        'Already have an account '

                                }
                            </a>
                            <TransperentBtn herf={isLoggingIn ? '/create-an-account' : '/login'} text={isLoggingIn ? 'sign up' : 'log in'} />
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default LoginNavBar