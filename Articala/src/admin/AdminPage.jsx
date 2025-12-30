import React, { useEffect, useState } from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import UsersList from './adminComponent/UsersList'

import './admin.css'

const AdminPage = () => {

    let [search, setSearch] = useState()
    // useEffect(()=>console.log(search),[search])
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container>
                    <Row className=' d-flex'>
                        <Col lg={3} className='position-relative listAdminBoxCol'>
                            <div className="listAdminBox pt-2">
                                <ul>
                                    <li>
                                        <button className='activeAdmin'>
                                            <h4>

                                                Users
                                            </h4>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div
                                id='users'
                                className="adminTab d-flex flex-column pt-3"
                            >
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                }}
                                    className="d-flex pb-3 w-100 gap-3"
                                >
                                    <input
                                        type="text" placeholder='search'

                                    onInput={(e) => {
                                        setSearch(e.target.value)
                                    }}
                                    />
                                    <button className='mainBtn textWhite'>
                                        Search
                                    </button>
                                </form>

                                <UsersList search={search}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default AdminPage