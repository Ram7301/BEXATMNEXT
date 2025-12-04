import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import { Metadata } from 'next'
// import Testimonial from '@/components/Home/Testimonial'
// import BlogSmall from '@/components/shared/Blog'
// import GetInTouch from '@/components/Home/GetInTouch'
// import FAQ from '@/components/Home/FAQs'

export const metadata: Metadata = {
  title: 'ATM',
  description: 'Agile Task Manager',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Properties />
    </main>
  )
}
