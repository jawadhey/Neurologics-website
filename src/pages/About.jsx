import React from 'react'
import { AboutHero, Contact, Footer, MediaLogoBanner, TechIconsSpread, WhoWeAre, WhoWeAreSection2, WorkingMethodology } from '../components/home/C1'

const About = () => {
  return (
    <div>
        <AboutHero/>
        <MediaLogoBanner/>
        <WhoWeAre/>
        <WhoWeAreSection2/>
        <WorkingMethodology/>
        <TechIconsSpread/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default About