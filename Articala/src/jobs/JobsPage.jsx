import React from 'react'
import NavBar from '../generalComponent/NavBar'
import Footer from '../generalComponent/Footer'
import JobsHero from './jobsComponents/JobsHero'
import JoinSection from './jobsComponents/JoinSection'


import './jobsStyle.css'
import BenefitsSection from './jobsComponents/BenefitsSection'
import JobOpprtunitiesSection from '../Home/home component/JobOpprtunitiesSection'
const JobsPage = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <JobsHero />
                <JoinSection />
                <BenefitsSection />
                <JobOpprtunitiesSection NoMore={true}/>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default JobsPage