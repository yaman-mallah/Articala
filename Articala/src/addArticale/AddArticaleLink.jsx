import React from 'react'
import { Link } from 'react-router'
import './addArticaleLink.css'
import { Container } from 'react-bootstrap'
const AddArticaleLink = () => {
    return (
        <Container className='articaleLinkContainer'>

            <a href={'/create-new-articale'}>
                <div className="articaleLink">
                    <svg  viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8802 1.5L15.6421 15.4041M15.4041 29.3081L15.6421 15.4041M15.6421 15.4041H1.5M15.6421 15.4041H29.7843" stroke="#6341af" stroke-opacity="1" stroke-width="4" stroke-linecap="round" />
                    </svg>
                </div>
            </a>
        </Container>
    )
}

export default AddArticaleLink