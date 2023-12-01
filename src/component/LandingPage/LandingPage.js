import React from 'react'
import KnowUs from './KnowUs/KnowUs'
import Homepage from './Homepage/Homepage'
import ProjectOverview from './ProjectsOverview/ProjectOverview'
import Footer from '../Routes/Footer/Footer'
import FeaturedWork from './FeaturedWork/FeaturedWork'


const LandingPage = () => {
    return (
        <div>
            <Homepage />
            <KnowUs />
           <ProjectOverview />
            <FeaturedWork />

           <Footer />
        
        </div>
    )
}

export default LandingPage
