import React from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'
import CreateForm from './addArticaleComponent/CreateForm'

import { Container } from 'react-bootstrap'

const CreateArticale = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Container>

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