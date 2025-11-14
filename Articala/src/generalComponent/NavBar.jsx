import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Logo from './Logo'
import NavBarList from './listComponent/NavBarList'
import SecondaryBtn from './buttonsComponent/SecondaryBtn'
import TransperentBtn from './buttonsComponent/TransperentBtn'
import LangugeDropDown from './dropDownComponent/LangugeDropDown'

const NavBar = () => {
    return (
        <>
            <nav>
                <Container>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex  align-items-center  gap-5">

                            <Logo />
                            <NavBarList />
                        </div>
                        <div className="d-flex gap-3  align-items-center">
                            <LangugeDropDown/>
                            <TransperentBtn text={'Sign In'}/>
                            <SecondaryBtn text={'Create Account'}/>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default NavBar