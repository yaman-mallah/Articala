import React from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'
import HeroSection from '../Home/home component/HeroSection'
import FaqHeroSection from './faqComponents/FaqHeroSection'


import './faq.css'
const FAQPage = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <FaqHeroSection/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default FAQPage