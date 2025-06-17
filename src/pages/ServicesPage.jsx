import React from 'react'
import { Contact, Footer, FooterComponent, MediaLogoBanner, ServicesGrid, ServicesSection } from '../components/home/C1'

const ServicesPage = () => {
  return (
    <div>
        <ServicesGrid/>
        <MediaLogoBanner/>
        <ServicesSection/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ServicesPage