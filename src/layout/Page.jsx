import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { FooterComponent } from '../components/home/C1'

const Page = () => {
  return (
    <div className='bg-[#EDEDED]'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Page