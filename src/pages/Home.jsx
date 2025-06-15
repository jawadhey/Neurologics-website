import React from 'react'
import Hero from '../components/home/Hero'
import ProgressCard, {  AsianCard, Contact, ContactMapSection, DownloadSection, ExpertTeamSection, FaqComponent, FooterComponent, Hero2, OurProjects, ServicesSection, StatsCards, TechIconsSpread, WhoWeAreSection, WhoWeAreSection2, WorkingMethodology } from '../components/home/C1'
import CardsGrid from '../components/home/CardsGrid'
import Dashboard from '../components/home/Dashboard'
import { MediaLogoBanner } from '../components/home/C1'
const Home = () => {
  return (
    <div className='min-h-[600vh] pt-[100px]'>
      <Hero/>
      <CardsGrid/>
      {/* <Dashboard/> */}
      <StatsCards/>
    <MediaLogoBanner/>
    <ServicesSection/>
    <TechIconsSpread/>
    <DownloadSection/>
    <FaqComponent/>
    {/* <ContactSection/> */}
    <WorkingMethodology/>
    <Contact/>
    <ContactMapSection/>
    <WhoWeAreSection/>
    <WhoWeAreSection2/>
    <ExpertTeamSection/>
    <OurProjects/>
    {/* <HeroSection/> */}
    <Hero2/>
    <FooterComponent/>
    <AsianCard/>
    </div>
  )
}

export default Home