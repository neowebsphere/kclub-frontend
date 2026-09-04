import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Brand from './components/Brand'
import Category from './components/Category'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Offer from './components/Offer'
import PopularCategory from './components/PopularCategory'
import PopularVideo from './components/PopularVideo'
import Testimonial from './components/Testimonial'

export const metadata: Metadata = { title: 'Index' }

const Page = () => {
  return (
    <>
      <Topbar className="bg-white shadow-sm dark:bg-[#121519]" showSignIn ButtonText="Sell car" ButtonClassName="rounded-md" ButtonIcon={<Plus className="size-4 me-2" />} />
      <Hero />
      <Category />
      <Offer />
      <Brand />
      <PopularCategory />
      <Feature />
      <Testimonial />
      <CTA />
      <PopularVideo />
      <Footer />
    </>
  )
}

export default Page
