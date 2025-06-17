import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import { FooterComponent } from '../components/home/C1'

const Page = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  return (
    <div className='bg-[#EDEDED]  pt-[120px]'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Page