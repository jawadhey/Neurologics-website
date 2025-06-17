import React, { useEffect, useRef } from 'react'
import AnalyticsChart , { NotificationCard, ProgressCard, ReviewCard } from './C1'
import { CreditCard } from './C1'

import { gsap } from 'gsap'

const CardsGrid = () => {
  const cardsRef = useRef([])

  // Function to collect refs
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  useEffect(() => {
  gsap.delayedCall(1, () => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1,
      stagger: 0.5,
      ease: "power2.out",
    })
  });
}, []);

  return (
    <div className='max-w-[1000px] mx-auto px-4'>
      <div className='grid md:grid-cols-3 md:grid-rows-6 min-h-[465px] gap-4'>
        
        {/* Review Card */}
        <div ref={addToRefs} className='row-span-2 col-span-1'>
          <ReviewCard />
        </div>

        {/* Credit Card */}
        <div ref={addToRefs} className='row-span-6 col-span-1'>
          <CreditCard />
        </div>

        {/* Progress Card */}
        <div ref={addToRefs} className='row-span-3 col-span-1'>
          <ProgressCard />
        </div>

        {/* Notification Card */}
        <div ref={addToRefs} className='col-span-1 row-span-4'>
          <NotificationCard />
        </div>

        {/* Analytics Chart */}
        <div ref={addToRefs} className='col-span-1 row-span-3'>
          <AnalyticsChart />
        </div>

      </div>
    </div>
  )
}

export default CardsGrid
