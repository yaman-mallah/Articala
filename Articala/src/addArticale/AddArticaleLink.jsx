import React from 'react'
import { Link } from 'react-router'
import './addArticaleLink.css'
import { Container } from 'react-bootstrap'
const AddArticaleLink = () => {
    return (
        <Container className='articaleLinkContainer'>

            <Link>
                <div className="articaleLink">

                </div>
            </Link>
        </Container>
    )
}

export default AddArticaleLink