import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import ActionCard from './components/ActionCard'
import Blog from './components/Blog'
import Calculator from './components/Calculator'
import Categories from './components/Categories'
import Hero from './components/Hero'
import Offer from './components/Offer'
import Partners from './components/Partners'
import Properties from './components/Properties'
import RecentlyAdded from './components/RecentlyAdded'
import Testimonial from './components/Testimonial'

export const metadata: Metadata = { title: 'Index' }

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
      <Categories />
      <ActionCard />
      <Offer />
      <RecentlyAdded />
      <Calculator />
      <Properties />
      <Partners />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  )
}

export default Page
