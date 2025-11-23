import React from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'
import ContactHero from './contactUsComponents/ContactHero'
import './contactStyle.css'
import BranchesSection from './contactUsComponents/branchesSection'
import ContactUsSection from './contactUsComponents/ContactUsSection'
const ContactUsPage = () => {
  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <ContactHero/>
            <BranchesSection/>
            <ContactUsSection/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default ContactUsPage