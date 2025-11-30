import React from 'react'
import HeroSection from './home component/HeroSection'
import CategoriesSection from './home component/CategoriesSection'
import LatestArticlesSection from './home component/LatestArticlesSection'
import TopWritersSection from './home component/TopWritersSection'
import OurPartners from './home component/OurPartners'
import JobOpprtunitiesSection from './home component/JobOpprtunitiesSection'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'

const HomePage = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>

                <HeroSection />
                <CategoriesSection />
                <LatestArticlesSection />
                <TopWritersSection />
                <JobOpprtunitiesSection />
                <OurPartners />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default HomePage