import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Feature from './components/Feature'
import FeatureCard from './components/FeatureCard'
import Hero from './components/Hero'
import ParterLogo from './components/ParterLogo'
import Stat from './components/Stat'
import Testimonial from './components/Testimonial'

export const metadata: Metadata = { title: 'About V1' }

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        showSignIn
        ButtonClassName="rounded-md"
        ButtonText={
          <>
            Add
            <span className="lg:block hidden ms-1">property</span>
          </>
        }
        ButtonIcon={<Plus className="size-4 me-2" />}
      />
      <Hero />
      <Feature />
      <CTA />
      <ParterLogo />
      <FeatureCard />
      <Stat />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  )
}

export default Page
