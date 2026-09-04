import Topbar from '@/components/topbar'
import { UserRound } from 'lucide-react'
import { Metadata } from 'next'
import Benefit from './components/Benefit'
import Blog from './components/Blog'
import Consultation from './components/Consultation'
import CTA from './components/CTA'
import Hero from './components/Hero'
import Offer from './components/Offer'
import PopularSearch from './components/PopularSearch'
import Work from './components/Work'
import MobileCTA from './components/MobileCTA'
import Footer from './components/Footer'

export const metadata: Metadata = { title: 'Index' }

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        ButtonClassName="text-nowrap rounded-md"
        showLogIn
        ButtonText="Sign up"
        ButtonIcon={
          <div>
            <UserRound className="size-4 me-2" />
          </div>
        }
      />
      <Hero />
      <PopularSearch />
      <Offer />
      <Consultation />
      <Work />
      <Benefit />
      <Blog />
      <CTA />
      <MobileCTA />
      <Footer />
    </>
  )
}

export default Page
