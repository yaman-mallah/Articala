import React from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'
import CreateForm from './addArticaleComponent/CreateForm'

import { Container } from 'react-bootstrap'
import CreateBlogForm from './addArticaleComponent/CreateBlogForm'

const CreateArticale = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container>
                    {/* <CreateBlogForm/> */}
                    <CreateForm />
                </Container>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default CreateArticale