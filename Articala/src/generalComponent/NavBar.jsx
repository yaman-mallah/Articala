import React, { useContext, useEffect, useState } from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Logo from './Logo'
import NavBarList from './listComponent/NavBarList'
import SecondaryBtn from './buttonsComponent/SecondaryBtn'
import TransperentBtn from './buttonsComponent/TransperentBtn'
import LangugeDropDown from './dropDownComponent/LangugeDropDown'
import { LoginContext } from '../context/loginContext'
import { loginService } from '../services/loginService'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavBar = () => {
    let [isSideBarOpen, setIsSideBarOpen] = useState(false)
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        let getWindowWidth = () => {
            setWindowWidth(window.innerWidth)
            setIsSideBarOpen(false)
        }
        window.addEventListener('resize', getWindowWidth)
        return () => {
            window.removeEventListener('resize', getWindowWidth)
        }

    }, [])



    let { isLogedIn, userInfo, imgLink } = useContext(LoginContext)
    // console.log(isLogedIn,userInfo)
    // if (userInfo)
    // loginService.getUserInfo(userInfo)



    return (
        <>
            <div className="navBarBox">
                <nav className='position-relative' >
                    <Container>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex  align-items-center  gap-5">

                                <Logo />
                                <div className="d-lg-flex d-none">

                                    <NavBarList />
                                </div>

                            </div>
                            <div className="d-flex gap-3  align-items-center z-3">

                                <div className="d-flex d-xxl-none">
                                    <button
                                        onClick={() => setIsSideBarOpen(e => e = !e)}
                                    >
                                        <svg width="30" height="30" viewBox="0 0 91 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2H88.4391M2 28.0808H88.4391M2 55.6855H88.4391" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                        </svg>

                                    </button>
                                </div>
                                {
                                    isLogedIn ?
                                        <>

                                            <TransperentBtn text={'Sign out'} />
                                            <div className="d-flex align-items-center  gap-2">
                                                <p className='titleLargRegular textWhite'>
                                                    
                                                </p>
                                                <DropdownButton id="dropdown-basic-button" title={userInfo.current_user.name}>
                                                    <Dropdown.Item href='/profile'>profile</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </DropdownButton>
                                                <div className="profileBox">
                                                    <img src={imgLink} alt="profileImage" className='navProfileImage' />
                                                </div>
                                            </div>
                                        </>

                                        :
                                        <>
                                            <LangugeDropDown />
                                            <div className="d-none gap-3 d-xxl-flex">
                                                <TransperentBtn text={'Sign In'} herf={'/login'} />
                                                <SecondaryBtn text={'Create Account'} herf={'/create-an-account'} />
                                            </div>
                                        </>
                                }

                            </div>
                        </div>
                    </Container>
                    <div className="w-100 sideBar"
                        style={isSideBarOpen ? { maxHeight: '800px' } : { maxHeight: '0px' }}
                    >
                        <Container>
                            <div className="d-flex flex-column pt-5 gap-5">
                                <div className="d-flex d-lg-none">
                                    <NavBarList isVertical={1} />
                                </div>
                                <div className="d-flex gap-3">
                                    <TransperentBtn text={'Sign In'} />
                                    <SecondaryBtn text={'Create Account'} />
                                </div>


                            </div>
                        </Container>
                    </div>

                </nav>
            </div>
        </>
    )
}

export default NavBar