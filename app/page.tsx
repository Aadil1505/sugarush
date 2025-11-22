import ContentSection from '@/components/global/content'
import ContentSection1 from '@/components/global/content-1'
import ContentSection2 from '@/components/global/content-2'
import ContentSection3 from '@/components/global/content-3'
import HeroSection from '@/components/global/hero'

export default function page() {
  return (
    <div className='min-h-screen'>
      <HeroSection/>
      <ContentSection/>
      <ContentSection1/>
      <ContentSection2/>
      <ContentSection3/>
    </div>
  )
}
