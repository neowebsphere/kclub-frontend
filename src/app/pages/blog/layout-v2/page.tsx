import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import CarRanking from './components/CarRanking'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PopularVideo from './components/PopularVideo'
import Post from './components/Post'
import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Blog Layout V2' }

const Page = () => {
  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        showSignIn
        ButtonClassName="rounded-md"
        ButtonText="Sell car"
        ButtonIcon={<Plus className="size-4 me-2" />}
      />
      <Hero />
      <Post />
      <CarRanking />
      <PopularVideo />
      <CTA />
      <Footer />
    </>
  )
}

export default Page
