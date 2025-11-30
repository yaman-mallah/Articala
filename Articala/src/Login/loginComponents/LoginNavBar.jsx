import React from 'react'
import Logo from '../../generalComponent/Logo'
import { Container } from 'react-bootstrap'
import TransperentBtn from '../../generalComponent/buttonsComponent/TransperentBtn'

const LoginNavBar = () => {
    return (
        <>


            <div className="loginHeaderBox">

                <Container>
                    <div className="d-flex justify-content-between align-items-center ">

                        <Logo />


                        <div className="d-flex gap-3  align-items-center  z-3">
                            <a href="">
                                Already have an account ?
                            </a>
                            <TransperentBtn herf={'/login'} text={'Sing In'} />
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default LoginNavBar