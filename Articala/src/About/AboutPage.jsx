import React from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'
import AboutUsHero from './aboutUsComponents/AboutUsHero'
import OurPartners from '../Home/home component/OurPartners'
import StorySection from './aboutUsComponents/StorySection'

import './aboutStyle.css'

const AboutPage = () => {
  return (
    <>
      <header>

        <NavBar />
      </header>
      <main>
          <AboutUsHero/>
          <OurPartners/>
          <StorySection/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default AboutPage