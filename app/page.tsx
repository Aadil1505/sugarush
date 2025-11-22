import ContentSection from '@/components/global/content'
import HeroSection from '@/components/global/hero'
import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen'>
      <HeroSection/>
      <ContentSection/>
    </div>
  )
}
