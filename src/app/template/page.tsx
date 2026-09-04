import Topbar from '@/components/topbar'
import { ShoppingBag } from 'lucide-react'
import { Metadata } from 'next'
import Comparison from './components/Comparison'
import Cta from './components/Cta'
import Feature from './components/Feature'
import Footer from './components/Footer'
import FrontEndSolution from './components/FrontEndSolution'
import Hero from './components/Hero'
import MobileFriendly from './components/MobileFriendly'

export const metadata: Metadata = { title: 'Index' }

const Page = () => {
  return (
    <>
      <Topbar appMenuClass="lg:block hidden lg:col-span-3 lg:ms-8" className="bg-white shadow-sm dark:bg-[#121519]" ButtonText="Buy now" ButtonIcon={<ShoppingBag className="size-4 me-2" />} ButtonClassName="rounded-md" />
      <Hero />
      <FrontEndSolution />
      <Comparison />
      <Feature />
      <MobileFriendly />
      <Cta />
      <Footer />
    </>
  )
}

export default Page
