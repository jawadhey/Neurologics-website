import React from 'react'
import Hero from '../components/home/Hero'
import  {AsianCard, WorkingMethodology, StatsCards, ServicesSection, OurProjects, TechIconsSpread, DownloadSection, FaqComponent, ExpertTeamSection,  FooterComponent, Footer} from '../components/home/C1'
import CardsGrid from '../components/home/CardsGrid'
// import Dashboard from '../components/home/Dashboard'
import { MediaLogoBanner } from '../components/home/C1'
const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <CardsGrid/>
      {/* <Dashboard/> */}
      <StatsCards/>
    <MediaLogoBanner/>
    <ServicesSection/>
    <OurProjects/>
    <AsianCard/>
    <WorkingMethodology/>
    <TechIconsSpread/>
    <DownloadSection/>
    <FaqComponent/>
    <ExpertTeamSection/>
    {/* <FooterComponent/> */}
    <Footer/>
    {/* <ContactSection/> */}
    {/* <Contact/> */}
    {/* <ContactMapSection/> */}
    {/* <WhoWeAreSection/> */}
    {/* <WhoWeAreSection2/> */}
    {/* <HeroSection/> */}
    {/* <Hero2/> */}
    {/* <ProgressChart/>
    <PerformanceChart/>
    <TrendsChart/>
    <SkillsRadarChart/>
    <AnalyticsLineChart/> */}
    {/* <ServicesGrid/> */}
    {/* <AboutHero/> */}
    </div>
  )
}

export default Home