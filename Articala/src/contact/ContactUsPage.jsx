import React from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'
import ContactHero from './contactUsComponents/ContactHero'
import './contactStyle.css'
const ContactUsPage = () => {
  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <ContactHero/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default ContactUsPage